"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { P, H3 } from "@/typography";

export default function ExpandingCard({
    data: { image, title, text, linkText, linkHref },
    isActive,
    isDesktop,
    onHoverStart,
}) {
    // flex behavior: desktop expanding, mobile fixed full width
    const flexStyle = isDesktop ? { flex: isActive ? 1 : "0 0 160px" } : { flex: "0 0 auto" };

    // Mobile: always show full content, no rotation, no grayscale
    if (!isDesktop) {
        return (
            <div className="w-full mb-6">
                <div className="relative w-full h-64  overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative p-8 flex flex-col justify-end h-full text-white space-y-2">
                        <h3 className="font-headline uppercase text-2xl leading-tight mb-8">{title}</h3>
                        <P className="text-sm leading-snug">{text}</P>
                        {linkText && (
                            <Link href={linkHref}>
                                <span className="inline-block underline font-semibold">{linkText}</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Desktop: expanding card with rotation and grayscale
    return (
        <motion.div
            layout
            onHoverStart={onHoverStart}
            className="relative overflow-hidden h-[600px] lg:h-[600px] 2xl:h-[860px] cursor-pointer flex-shrink-0"
            style={flexStyle}
            transition={{ type: "tween", duration: 0.5 }}
        >
            {/* Background image */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-filter duration-500 ${
                    isActive ? "filter-none" : "grayscale"
                }`}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <motion.div layout className={`relative p-8 flex flex-col h-full ${isActive ? "pt-[60%]" : "pt-0"}`}>
                {isActive ? (
                    <motion.h3
                        layout
                        initial={{ rotate: -90 }}
                        animate={{ rotate: 0 }}
                        transition={{ type: "tween", stiffness: 100, damping: 10 }}
                        className="font-headline uppercase text-2xl 2xl:text-4xl text-white"
                        style={{ transformOrigin: "center" }}
                    >
                        {title}
                    </motion.h3>
                ) : (
                    <motion.h3
                        layout
                        initial={false}
                        animate={{ rotate: -90 }}
                        transition={{ type: "tween", stiffness: 100, damping: 10 }}
                        className="font-headline uppercase text-3xl text-gray-200 absolute inset-0 flex items-center justify-center"
                        style={{ transformOrigin: "center" }}
                    >
                        {title}
                    </motion.h3>
                )}

                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 pt-8 text-white"
                    >
                        <P>{text}</P>
                        {linkText && (
                            <Link href={linkHref}>
                                <span className="inline-block border-b-2 border-white font-semibold">{linkText}</span>
                            </Link>
                        )}
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}
