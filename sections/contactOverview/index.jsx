// components/ContactSection.jsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import { H1, H2, P } from "@/typography";
import { Phone, Mail, ChevronDown } from "lucide-react";

import { useGlobals } from "@/context/GlobalsContext";
import { PT } from "@/components/text";

const services = [
    { value: "", label: "Generelle Anfrage" },
    { value: "beratung", label: "Technische Beratung" },
    { value: "projekt", label: "Bauprojektmanagement" },
    { value: "esg", label: "ESG-Transformation" },
    { value: "digitalisierung", label: "Digitalisierung FM-Betrieb" },
];

export default function ContactSection({ gradientFrom = "rgba(0, 0, 0, 0.7)", gradientTo = "transparent" }) {
    const router = useRouter();

    const globals = useGlobals() || {};
    const data = globals?.kontaktCta.headline;

    console.log(data);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [apiError, setApiError] = useState("");

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Bitte Ihren Namen eingeben.";
        if (!form.email) errs.email = "Bitte Ihre E-Mail-Adresse eingeben.";
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) errs.email = "Ungültige E-Mail-Adresse.";
        if (!form.phone.trim()) errs.phone = "Bitte Ihre Telefonnummer eingeben.";
        if (!form.service) errs.service = "Bitte eine Leistung auswählen.";
        if (!form.message.trim()) errs.message = "Bitte eine Nachricht eingeben.";
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError("");
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error("Serverfehler");
            setSuccess(true);
            setForm({ name: "", phone: "", email: "", service: "", message: "" });
        } catch (err) {
            setApiError("Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="py-16 lg:py-30 bg-background-dark text-white relative font-body">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">
                {/* Left info */}
                <H1 klasse="lg:col-span-2">{globals?.kontaktCta.headline}</H1>
                <div className="space-y-6">
                    <PT value={globals?.kontaktCta.text} className="prose max-w-none mb-6" />
                    <div className="flex items-center space-x-4 mt-16">
                        <Phone className="w-6 h-6" />
                        <span>{globals?.kontaktCta.phone}</span>
                    </div>
                    <div className="flex items-center space-x-4 mb-12 lg:mb-0">
                        <Mail className="w-6 h-6" />
                        <span>{globals?.kontaktCta.email}</span>
                    </div>{" "}
                </div>

                {/* <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(circle at top left, ${gradientFrom}, ${gradientTo})`,
                    }}
                /> */}

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {success && (
                        <div className="p-4 bg-green-600 rounded">Vielen Dank! Ihre Nachricht wurde gesendet.</div>
                    )}
                    {apiError && <div className="p-4 bg-red-600 rounded">{apiError}</div>}

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold mb-1" htmlFor="name">
                            Ihr Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-400 focus:border-primaryColor-500 py-2"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="phone">
                                Telefon
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-400 focus:border-primaryColor-500 py-2"
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gray-400 focus:border-primaryColor-500 py-2"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Service */}
                    <div className="relative">
                        <label htmlFor="service" className="block text-sm font-semibold mb-1">
                            Gewünschte Leistung
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-400 focus:border-primaryColor-500 py-2 pr-8 appearance-none"
                        >
                            {services.map((s) => (
                                <option className="text-background-dark " key={s.value} value={s.value}>
                                    {s.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-semibold mb-1" htmlFor="message">
                            Nachricht
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-gray-400 focus:border-primaryColor-500 py-2"
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="mt-4 bg-primaryColor-500 hover:bg-primaryColor-600 text-white w-full lg:w-auto font-semibold py-3 px-8 rounded disabled:opacity-50"
                    >
                        {submitting ? "Senden..." : "abschicken"}
                    </button>
                </form>
            </div>
        </section>
    );
}
