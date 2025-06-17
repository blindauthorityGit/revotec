import React from "react";
import { motion } from "framer-motion";
import { H1, H3, P } from "@/typography";
import { MainButton } from "@/components/buttons";

export default function SubpageHero({
    title = "Seitenüberschrift",
    subtitle = "Kurzbeschreibung oder Untertitel für diese Unterseite.",
    ctaText = "Mehr erfahren",
    ctaLink = "#",
    bgImage = null,
    bgGradientFrom = "rgba(0,0,0,0.6)",
    bgGradientTo = "transparent",
    gradientFrom = "rgba(245,130,31,0.15)",
    gradientTo = "transparent",
}) {
    return (
        <section className="relative bg-background-dark min-h-[60vh] py-20 lg:min-h-[300px] flex items-center justify-center  text-white overflow-hidden">
            {/* Background Image or Gradient */}
            {bgImage && (
                <div
                    className="absolute inset-0 opacity-60 bg-cover bg-center grayscale"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
            )}
            <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to right bottom, ${bgGradientFrom}, ${bgGradientTo})` }}
            />

            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: `radial-gradient(circle at top left, ${gradientFrom}, ${gradientTo})`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 space-y-6">
                {/* Title and animated underline */}
                <div className="inline-block">
                    <H1 klasse="font-bold leading-tight text-4xl md:text-5xl lg:text-6xl">{title}</H1>
                    <motion.div
                        className="mt-2 h-1 bg-primaryColor-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </div>

                {/* Subtitle as H3 */}
                <P klasse="max-w-2xl text-lg md:text-xl opacity-90">{subtitle}</P>

                {/* CTA Button */}
                {/* <MainButton link={ctaLink} dark aklass="mt-4 mx-auto">
                    {ctaText}
                </MainButton> */}
            </div>
        </section>
    );
}
