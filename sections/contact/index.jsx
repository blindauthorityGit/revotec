// sections/ContactSection.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MainButton } from "@/components/buttons";
import { Phone, Mail, Calendar, Upload } from "lucide-react";
import clsx from "clsx";
import { H1, H2, P } from "@/typography";

export default function ContactSection({ gradientFrom = "rgba(245,130,31,0.15)", gradientTo = "transparent" }) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        appointment: "",
        message: "",
        file: null,
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormState((fs) => ({
            ...fs,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        const data = new FormData();
        Object.entries(formState).forEach(([k, v]) => {
            if (v != null) data.append(k, v);
        });
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: data,
            });
            if (!res.ok) throw new Error();
            setStatus("success");
            setFormState({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                appointment: "",
                message: "",
                file: null,
            });
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="relative font-body bg-background-dark text-white overflow-hidden py-20">
            {/* subtle gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: `radial-gradient(circle at top left, ${gradientFrom}, ${gradientTo})`,
                }}
            />
            <div className="relative container mx-auto py-16 lg:py-30 px-6 lg:px-12 grid grid-cols-12 lg:gap-12 items-start">
                {/* Left Info */}
                <div className="col-span-12 lg:col-span-5 space-y-6">
                    <motion.H1
                        className="text-2xl lg:text-7xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Wir beraten Sie gerne!
                    </motion.H1>
                    <motion.div
                        className="w-24 h-1 bg-primaryColor-500"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ transformOrigin: "left center" }}
                    />
                    <motion.p
                        className="text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Sie haben Fragen zu unseren Leistungen, möchten ein konkretes Projekt besprechen oder gleich
                        einen Termin vereinbaren? Nutzen Sie gerne unser Kontaktformular, laden Sie relevante Unterlagen
                        hoch, oder schlagen Sie direkt einen Termin vor. Wir melden uns umgehend zurück!
                    </motion.p>

                    <motion.div
                        className="space-y-4 lg:text-2xl mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="flex items-center gap-3 text-white">
                            <Phone className="w-5 h-5 text-primaryColor-500" />
                            <span>+49 5555 5555</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <Mail className="w-5 h-5 text-primaryColor-500" />
                            <span>info@revotec-gmbh.de</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Form */}
                <div className="col-span-12 lg:col-span-7 mt-10 lg:mt-0">
                    <form
                        className="bg-gray-800 p-4 lg:p-8 rounded-xl shadow-xl space-y-6"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-1" htmlFor="name">
                                    Ihr Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-700 text-white p-3 rounded focus:ring-2 focus:ring-primaryColor-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1" htmlFor="company">
                                    Firma
                                </label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    value={formState.company}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 text-white p-3 rounded focus:ring-2 focus:ring-primaryColor-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1" htmlFor="phone">
                                    Telefon
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formState.phone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 text-white p-3 rounded focus:ring-2 focus:ring-primaryColor-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1" htmlFor="email">
                                    E-Mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-700 text-white p-3 rounded focus:ring-2 focus:ring-primaryColor-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold mb-1" htmlFor="service">
                                    Gewünschte Leistung
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formState.service}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 text-white p-3 rounded focus:ring-2 focus:ring-primaryColor-500"
                                >
                                    <option value="">Bitte wählen …</option>
                                    <option value="beratung">Technische Beratung</option>
                                    <option value="projekt">Bauprojektmanagement</option>
                                    <option value="esg">ESG-Transformation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1" htmlFor="appointment">
                                    Terminvorschlag
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                                    <input
                                        id="appointment"
                                        name="appointment"
                                        type="datetime-local"
                                        value={formState.appointment}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700 text-white pl-10 p-3 rounded focus:ring-2 focus:ring-primaryColor-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="file">
                                Datei hochladen (z.B. Pläne, Fotos)
                            </label>
                            <div className="relative">
                                <Upload className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    id="file"
                                    name="file"
                                    type="file"
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 text-white pl-10 p-3 rounded focus:ring-2 focus:ring-primaryColor-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="message">
                                Nachricht
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formState.message}
                                onChange={handleChange}
                                className="w-full bg-gray-700 text-white p-3 rounded focus:ring-2 focus:ring-primaryColor-500"
                            />
                        </div>

                        <div className="text-right">
                            <MainButton type="submit" variant="light" className="px-8">
                                {status === "loading" ? "…schicke ab" : "Absenden"}
                            </MainButton>
                        </div>

                        {status === "success" && (
                            <p className="mt-4 text-green-400">Danke für Ihre Anfrage, wir melden uns bald!</p>
                        )}
                        {status === "error" && (
                            <p className="mt-4 text-red-400">Fehler beim Senden. Bitte versuchen Sie es erneut.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
