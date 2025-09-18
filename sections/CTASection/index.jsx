// components/CTASection.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { H1, H2, P } from "@/typography";
import { CTAButton } from "@/components/buttons";

import { useGlobals } from "@/context/GlobalsContext";

export default function CTASection({
    title = "Bereit, den nächsten Schritt zu gehen?",
    text = "Ob erste Beratung oder konkretes Projekt – wir freuen uns, mehr über Ihre Vorhaben zu erfahren. Lassen Sie uns gemeinsam die passende Lösung für Ihre Immobilie finden.",
    buttonText = "Jetzt Kontakt aufnehmen",
    buttonLink = "/kontakt",
    bgColor = "bg-primaryColor-500",
    textColor = "text-background-dark",
}) {
    const globals = useGlobals() || {};

    console.log(globals?.ctaBanner.headline);

    return (
        <section className={`${bgColor} py-24 overflow-hidden`}>
            <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <H1 klasse={`mb-4 ${textColor} text-4xl lg:text-5xl font-bold leading-tight`}>
                        {globals?.ctaBanner.headline}
                    </H1>

                    {/* Unterstreichung als Linie */}
                    <motion.div
                        className={`mx-auto mb-8 h-1 bg-black w-0`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "4rem" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    />

                    <P klasse={`mb-12 ${textColor} opacity-90 text-lg lg:text-xl`}>{globals?.ctaBanner.subline}</P>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
                    >
                        <CTAButton link="/kontakt" variant="dark">
                            {globals?.ctaBanner.ctaLabel}
                        </CTAButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
