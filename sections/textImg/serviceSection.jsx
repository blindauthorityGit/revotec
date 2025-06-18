// components/ServiceHighlights.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { H2, P } from "@/typography";
import { MainButton } from "@/components/buttons";

/**
 * props.services: [
 *   {
 *     title: string,
 *     intro: string | ReactNode,
 *     bullets: string[],
 *     image: string,
 *     buttonText: string,
 *     link: string
 *   }, …
 * ]
 */
export default function ServiceHighlights({ services = [] }) {
    const [activeIdx, setActiveIdx] = useState(null);

    return (
        <section className="py-16 lg:py-30 bg-background-dark text-white font-body">
            <div className="container mx-auto px-6">
                <div className="grid gap-8 lg:grid-cols-3">
                    {services.map((svc, idx) => {
                        const isActive = activeIdx === idx;
                        const isOther = activeIdx !== null && activeIdx !== idx;

                        return (
                            <motion.div
                                key={idx}
                                onMouseEnter={() => setActiveIdx(idx)}
                                onMouseLeave={() => setActiveIdx(null)}
                                className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                                initial="rest"
                                animate={isActive ? "hover" : "rest"}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {/* Bild-Hintergrund */}
                                <motion.div
                                    className="absolute inset-0"
                                    style={{ zIndex: 1 }}
                                    initial={{ scale: 1 }}
                                    animate={{
                                        scale: isActive ? 1.05 : isOther ? 0.95 : 1,
                                        opacity: isOther ? 0.7 : 1,
                                    }}
                                    transition={{ type: "tween", duration: 0.5 }}
                                ></motion.div>

                                {/* Farb-Overlay on Hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primaryColor-600 to-primaryColor-400 opacity-0"
                                    animate={{ opacity: isActive ? 0.2 : 0 }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Content */}
                                <motion.div
                                    className="relative p-8 flex flex-col h-full z-10"
                                    initial={{ y: 0 }}
                                    animate={{ y: isActive ? -8 : 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <H2 klasse="text-2xl lg:text-3xl font-semibold mb-8">{svc.title}</H2>

                                    <P klasse="flex-1 mb-12 leading-relaxed opacity-80">{svc.intro}</P>

                                    <ul className="space-y-3 mb-12">
                                        {svc.bullets.map((b, i) => (
                                            <li key={i} className="flex items-center">
                                                <Check className="flex-shrink-0 w-6 h-6 mr-3 text-primaryColor-500" />
                                                <P klasse="font-semibold">{b}</P>
                                            </li>
                                        ))}
                                    </ul>

                                    <MainButton klasse="mt-auto w-full lg:w-full " link={svc.buttonLink}>
                                        {svc.buttonText}
                                    </MainButton>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
