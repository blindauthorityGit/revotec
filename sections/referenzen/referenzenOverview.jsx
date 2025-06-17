// sections/ReferencesOverview.jsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { P, H2, H3 } from "@/typography";

import { references } from "@/data/referenzen";

const categories = [
    { key: "all", label: "Alle Anzeigen" },
    { key: "beratung", label: "Technische Beratung" },
    { key: "projekt", label: "Bauprojektmanagement" },
    { key: "esg", label: "ESG Transformation" },
];

// Beispiel-Daten (kommt später aus Props oder API)
const sampleProjects = [
    {
        id: 1,
        category: "projekt",
        title: "Projekt: Bürokomplex Nordstern – München",
        bullets: [
            "Technische Gebäudeaufnahme",
            "Bewertung brandschutztechnischer Anlagen",
            "Übergabe in CAFM-System (inkl. SAP-Connect)",
        ],
        image: "/images/project-munich.jpg",
        link: "/referenzen/1",
    },
    // … weitere Projekte
];

export default function ReferencesOverview({ projects }) {
    const [filter, setFilter] = useState("all");

    console.log(references);

    // Gefilterte Liste
    const visible = useMemo(() => {
        if (filter === "all") return references;
        return references.filter((p) => p.category === filter);
    }, [filter, references]);

    return (
        <section className="py-16 lg:py-30 bg-gray-50 font-body">
            <div className="container mx-auto px-6 md:px-12 space-y-8">
                {/* Einleitungstext */}
                <div className="text-center space-y-4">
                    <P className="max-w-2xl mx-auto font-body">
                        Jedes Projekt ist anders – und genau das macht unsere Arbeit so spannend. Hier sehen Sie eine
                        Auswahl aktueller und abgeschlossener Projekte aus unseren drei Kernbereichen.
                    </P>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setFilter(cat.key)}
                            className={clsx(
                                "px-4 py-2 rounded-full font-medium transition",
                                filter === cat.key
                                    ? "bg-primaryColor-500 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projekte Grid */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={filter}
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {visible.map((p) => (
                            <motion.article
                                key={p.id}
                                layout
                                whileHover={{ scale: 1.03, y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
                            >
                                {/* Bild */}
                                <div className="relative w-full h-48">
                                    <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
                                    {/* Category Badge */}
                                    <span className="absolute top-3 left-3 bg-gray-800 bg-opacity-70 text-white text-xs px-2 py-1 rounded-lg">
                                        {categories.find((c) => c.key === p.category)?.label}
                                    </span>
                                </div>

                                {/* Text */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                                    <ul className="flex-1 list-disc list-inside space-y-1 mb-4 text-sm text-gray-600">
                                        {p.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                    <Link href={`/referenzen/${p.slug}`} passHref>
                                        <div className="mt-auto inline-block text-primaryColor-500 font-medium hover:underline">
                                            Mehr erfahren →
                                        </div>
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
