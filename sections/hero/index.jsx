"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { H1, P } from "@/typography";
import { MainButton } from "@/components/buttons";

export default function Hero({
    bgColor = "#000000",
    gradientFrom = "rgba(0, 0, 0, 0.7)",
    gradientTo = "transparent",
    headline = "Your dynamic headline here",
    subline = "Your dynamic subline here",
    buttonText = "Click me",
    buttonLink = "#",
    imageSrc = null,
    imageAlt = "Hero image",
    phone = "+49 555555555",
    email = "info@example.com",
}) {
    const containerRef = useRef(null);

    // 1) Track scroll _within_ the hero
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // 2) 0 → when hero.top hits viewport.top
        //    1 → when hero.bottom hits viewport.top
        offset: ["start start", "end start"],
    });

    // 3) Only map X; Y stays 0
    // const textX = useTransform(scrollYProgress, [0, 1], [0, 130]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -400]);

    const imageX = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[100svh] overflow-hidden bg-background-dark"
            // style={{ backgroundColor: bgColor }}
        >
            {/* Radial gradient overlay */}
            {/* <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: `radial-gradient(circle at top left, ${gradientFrom}, ${gradientTo})`,
                }}
            /> */}

            {/* image */}
            {imageSrc && (
                <motion.div
                    style={{ x: imageX, y: 0 }}
                    className="
              col-span-12 lg:hidden
              relative h-80 md:h-[60svh] lg:h-[75svh]
              md:-ml-48 mt-16 md:mt-24 lg:mt-0
              max-w-none mix-blend-lighten opacity-50
            "
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        layout="fill"
                        objectFit="cover"
                        style={{ mixBlendMode: "lighten" }}
                        className="rounded-lg shadow-xl"
                    />
                </motion.div>
            )}

            <div className="container -mt-40 md:-mt-54 lg:mt-0 grid grid-cols-12 mx-auto px-6 md:px-12 relative z-10 lg:items-end lg:h-[90svh]">
                {/* text */}
                <motion.div style={{ y: textY }} className="col-span-12 lg:col-span-7 space-y-6 text-white z-20">
                    <H1 klasse="font-semibold mb-6 lg:mb-16">{headline} </H1>
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                        <MainButton aklass="w-full lg:w-auto" link={buttonLink}>
                            {buttonText}
                        </MainButton>
                        <P klasse="!text-sm font-extralight">{subline}</P>
                    </div>
                    <div className="mt-8 lg:flex space-x-6 text-sm font-body hidden ">
                        <div className="flex items-center space-x-2">
                            {/* phone icon + number */}
                            {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 5a2 2 0 …" />
                            </svg> */}
                            <span>{phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* mail icon + address */}
                            {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 4h16a2 2 0 …" />
                            </svg> */}
                            <span>{email}</span>
                        </div>
                    </div>
                </motion.div>

                {/* image */}
                {imageSrc && (
                    <motion.div
                        style={{ x: imageX, y: 0 }}
                        className="
              hidden lg:block lg:col-span-5
              relative h-80 lg:h-[75svh]
              md:-ml-48 mt-10 lg:mt-0
              max-w-none mix-blend-lighten opacity-50
            "
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            layout="fill"
                            objectFit="cover"
                            style={{ mixBlendMode: "lighten" }}
                            className="rounded-lg shadow-xl"
                        />
                    </motion.div>
                )}
            </div>
        </section>
    );
}
