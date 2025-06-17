import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { H3, P } from "@/typography";

const containerVariants = {
    rest: { filter: "grayscale(100%)", transition: { duration: 0.5 } },
    hover: { filter: "grayscale(0%)", transition: { duration: 0.5 } },
};

const contentVariants = {
    rest: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
};

export default function ReferenceCard({
    image,
    tag,
    title,
    text,
    linkText,
    linkHref,
    isActive,
    isMobile,
    onHoverStart,
}) {
    if (isMobile) {
        // Mobile: always show content
        return (
            <div className="w-full mb-6 font-body">
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative p-4 flex flex-col justify-center h-full text-white space-y-2">
                        <h3 className="font-headline uppercase text-xl leading-tight">{title}</h3>
                        <P className="text-xs opacity-75 py-4 leading-snug">{text}</P>
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

    // Desktop: hover to show content
    return (
        <motion.div
            className="relative h-[500px] rounded-lg overflow-hidden font-body"
            variants={containerVariants}
            initial="rest"
            animate={isActive ? "hover" : "rest"}
            onMouseEnter={onHoverStart}
        >
            <Image src={image} alt={title} fill style={{ objectFit: "cover" }} className="absolute inset-0" />
            <div className="absolute inset-0 bg-black/30" />

            {/* content */}
            <motion.div
                className="relative inset-0 p-6 flex flex-col justify-center h-full text-white space-y-2"
                variants={contentVariants}
                initial="rest"
                animate={isActive ? "hover" : "rest"}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {tag && (
                    <motion.span
                        className="bg-green-500 text-xs text-center font-bold px-2 py-1 absolute top-4 right-4 rounded-full"
                        variants={contentVariants}
                        transition={{ delay: 0.1 }}
                    >
                        {tag}
                    </motion.span>
                )}
                <motion.div variants={contentVariants} transition={{ delay: 0.15 }}>
                    <H3 className="text-2xl font-bold">{title}</H3>
                </motion.div>
                {text && (
                    <motion.div variants={contentVariants} transition={{ delay: 0.2 }}>
                        <P className="text-sm leading-snug">{text}</P>
                    </motion.div>
                )}
                {linkText && (
                    <motion.div variants={contentVariants} transition={{ delay: 0.25 }}>
                        <Link href={linkHref}>
                            <span className="inline-block mt-4 border-b-2 border-white font-semibold">{linkText}</span>
                        </Link>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}
