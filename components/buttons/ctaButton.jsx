// components/CTAButton.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAButton({
    link = "#",
    onClick,
    type = "button",
    disabled,
    variant = "default", // "default" oder "dark"
    className = "",
    children,
    ...props
}) {
    const transition = { duration: 0.4, ease: [0.3, 0, 0.1, 1] };

    // Styles je nach Variante
    const isDark = variant === "dark";
    const bgClass = isDark ? "bg-white text-primaryColor-500" : "bg-primaryColor-500 text-white";
    const hoverOverlay = isDark ? "bg-background-dark " : "bg-primaryColor-600";

    const btnVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.25 },
    };
    const overlayVariants = {
        rest: { x: "-100%" },
        hover: { x: "0%" },
    };

    return (
        <Link href={link} passHref>
            <motion.button
                {...props}
                onClick={onClick}
                type={type}
                disabled={disabled}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={btnVariants}
                transition={transition}
                className={`
          relative overflow-hidden
          ${bgClass}
          font-body font-semibold lg:text-sm
          flex items-center justify-center
          py-3 px-12
          inline-block
          ${disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"}
          ${className}
        `}
                style={{
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
                }}
            >
                {/* Hover-Overlay */}
                <motion.div
                    className={`absolute inset-0 ${hoverOverlay}`}
                    style={{ clipPath: "inherit" }}
                    variants={overlayVariants}
                    transition={transition}
                />

                {/* Button-Text */}
                <span className="relative z-10">{children}</span>
            </motion.button>
        </Link>
    );
}
