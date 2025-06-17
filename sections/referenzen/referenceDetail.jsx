// sections/ReferenceDetail.jsx
"use client";

import React from "react";
import Image from "next/image";
import { P, H2, H1 } from "@/typography";
import { MainButton } from "@/components/buttons";
import Link from "next/link";

export default function ReferenceDetail({ reference }) {
    return (
        <section className="py-16 lg:py-30 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 space-y-12 font-body">
                {/* Breadcrumb / Back-Link */}
                <div>
                    <Link href="/referenzen" passHref>
                        <div className="text-sm text-gray-500 hover:underline">&larr; Zurück zur Übersicht</div>
                    </Link>
                </div>

                {/* Header: Kategorie + Titel */}
                <div className="space-y-4 text-center">
                    <div className="inline-block px-3 py-1 text-xs font-medium text-white bg-primaryColor-500 rounded-full">
                        {reference.category === "beratung"
                            ? "Technische Beratung"
                            : reference.category === "projekt"
                            ? "Bauprojektmanagement"
                            : "ESG-Transformation"}
                    </div>
                    <H1 klasse="text-3xl lg:text-4xl font-bold">{reference.title}</H1>
                    <P klasse="max-w-2xl mx-auto text-gray-700">{reference.intro}</P>
                </div>

                {/* Leistungen & Challenge */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Text-Column */}
                    <div className="space-y-8">
                        {/* Leistungen */}
                        <div className="space-y-4">
                            <H2 klasse="text-2xl font-semibold">Unsere Leistungen</H2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {reference.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Herausforderung & Lösung */}
                        <div className="space-y-4">
                            <H2 klasse="text-2xl font-semibold">Herausforderung & Lösung</H2>
                            <P klasse="text-gray-700">{reference.challengeSolution}</P>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={reference.image}
                            alt={reference.title}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Galerie */}
                {reference.galleryImages?.length > 0 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reference.galleryImages.map((src, i) => (
                                <div key={i} className="rounded-xl overflow-hidden shadow-md">
                                    <Image
                                        src={src}
                                        alt={`${reference.title} Bild ${i + 1}`}
                                        width={400}
                                        height={300}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Ergebnis */}
                <section className="bg-gray-800 text-gray-100 rounded-2xl p-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <H2 klasse="text-2xl font-semibold text-orange-400">Das Ergebnis</H2>
                            <P klasse="text-gray-100">{reference.result}</P>
                        </div>
                        {reference.resultImage && (
                            <div className="rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src={reference.resultImage}
                                    alt="Ergebnis"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        )}
                    </div>
                </section>

                {/* Detail-Infos */}
                <div className="grid sm:grid-cols-3 gap-8 text-gray-600">
                    <div>
                        <span className="block font-semibold">Datum</span>
                        <span>{reference.date}</span>
                    </div>
                    <div>
                        <span className="block font-semibold">Ort</span>
                        <span>{reference.location}</span>
                    </div>
                    <div>
                        <span className="block font-semibold">Auftraggeber</span>
                        <span>{reference.client}</span>
                    </div>
                </div>

                {/* CTA */}
            </div>
        </section>
    );
}
