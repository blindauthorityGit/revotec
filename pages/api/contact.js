import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs/promises";
import path from "path";

// Next.js bodyParser für multipart deaktivieren
export const config = { api: { bodyParser: false } };

// Hilfsfunktionen
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
const allowedMime = new Set([
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
]);
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

    try {
        // 1) Multipart parsen
        const form = formidable({ multiples: false, maxFileSize: MAX_FILE_BYTES });
        const { fields, files } = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => (err ? reject(err) : resolve({ fields, files })));
        });

        // 2) Felder holen & trimmen
        const data = {
            name: String(fields.name || "").trim(),
            email: String(fields.email || "").trim(),
            phone: String(fields.phone || "").trim(),
            company: String(fields.company || "").trim(),
            service: String(fields.service || "").trim(),
            appointment: String(fields.appointment || "").trim(),
            message: String(fields.message || "").trim(),
        };

        // 3) Server-Validierung
        const errors = {};
        if (!data.name) errors.name = "Bitte Ihren Namen angeben.";
        if (!isEmail(data.email)) errors.email = "Bitte eine gültige E-Mail angeben.";
        // message optional – wenn Pflicht: aktivieren
        // if (!data.message) errors.message = "Bitte eine Nachricht schreiben.";

        // Datei prüfen (optional)
        let attachment = null;
        const file = files.file;
        if (file && file.size > 0) {
            if (!allowedMime.has(file.mimetype)) {
                errors.file = "Unerlaubter Dateityp.";
            } else if (file.size > MAX_FILE_BYTES) {
                errors.file = "Datei ist größer als 10 MB.";
            } else {
                const buffer = await fs.readFile(file.filepath);
                attachment = {
                    filename: file.originalFilename || "upload" + path.extname(file.originalFilename || ""),
                    content: buffer,
                    contentType: file.mimetype,
                };
            }
        }

        if (Object.keys(errors).length) {
            return res.status(400).json({ ok: false, errors });
        }

        // 4) Mail-Transport
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: Number(process.env.SMTP_PORT) === 465, // true für 465
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });

        // 5) Mail-Inhalte
        const subject = `Neue Anfrage über "Beratung buchen" von ${data.name}`;
        const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.5;color:#0f172a">
        <h2 style="margin:0 0 12px 0;">Neue Kontaktanfrage</h2>
        <p style="margin:0 0 16px 0;">Es wurde eine Anfrage über das Formular gesendet.</p>
        <table style="border-collapse:collapse;width:100%;max-width:700px;">
          <tbody>
            ${row("Name", esc(data.name))}
            ${row("E-Mail", `<a href="mailto:${esc(data.email)}">${esc(data.email)}</a>`)}
            ${row("Telefon", esc(data.phone))}
            ${row("Firma", esc(data.company))}
            ${row("Gewünschte Leistung", labelService(data.service))}
            ${row("Terminvorschlag", esc(data.appointment))}
            ${row("Nachricht", nl2br(esc(data.message)))}
          </tbody>
        </table>
      </div>
    `;

        const text = [
            "Neue Kontaktanfrage",
            "====================",
            "",
            `Name: ${data.name}`,
            `E-Mail: ${data.email}`,
            `Telefon: ${data.phone}`,
            `Firma: ${data.company}`,
            `Gewünschte Leistung: ${serviceReadable(data.service)}`,
            `Terminvorschlag: ${data.appointment}`,
            "",
            "Nachricht:",
            data.message,
        ].join("\n");

        const mailOptions = {
            from: process.env.CONTACT_FROM || process.env.SMTP_USER,
            to: process.env.CONTACT_TO || process.env.SMTP_USER,
            replyTo: data.email,
            subject,
            text,
            html,
            attachments: attachment ? [attachment] : [],
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error("CONTACT API ERROR:", err);
        return res.status(500).json({ ok: false, error: "Server error" });
    }
}

// Helpers
const esc = (s = "") =>
    s.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const nl2br = (s) => s.replace(/\n/g, "<br />");

const labelService = (val) => esc(serviceReadable(val));
function serviceReadable(val) {
    switch (val) {
        case "beratung":
            return "Technische Beratung";
        case "projekt":
            return "Bauprojektmanagement";
        case "esg":
            return "ESG-Transformation";
        default:
            return "";
    }
}
function row(label, value) {
    return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;width:220px;color:#64748b">${esc(label)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${
          value || "<span style='color:#94a3b8'>–</span>"
      }</td>
    </tr>`;
}
