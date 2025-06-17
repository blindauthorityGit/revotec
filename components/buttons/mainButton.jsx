import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MainButton({
    link = "#",
    onClick,
    type = "button",
    disabled,
    klasse = "",
    aklass = "",
    children,
    icon,
    dark,
    ...props
}) {
    const transition = { duration: 0.4, ease: [0.3, 0, 0.1, 1] };

    const buttonVariants = {
        rest: {},
        hover: {},
    };

    const overlayVariants = {
        rest: { scaleX: 0 },
        hover: { scaleX: 1 },
    };

    const arrowVariants = {
        rest: { scale: 0, opacity: 0 },
        hover: { scale: 1, opacity: 1 },
    };

    return (
        <Link href={link} passHref className={aklass}>
            <motion.button
                {...props}
                onClick={onClick}
                type={type}
                disabled={disabled}
                variants={buttonVariants}
                initial="rest"
                animate="rest"
                whileHover="hover"
                transition={transition}
                className={`
          relative overflow-hidden
          border-2 border-primaryColor-500
          bg-transparent text-white
          font-body font-semibold
          flex items-center justify-center
          py-4 text-xs sm:text-base xl:text-sm
          sm:py-6 xl:py-6
          w-full lg:w-auto px-6 xl:px-12 lg:min-w-[18rem] cursor-pointer
          ${disabled ? "opacity-30 pointer-events-none" : ""}
          ${klasse}
        `}
            >
                {/* fill overlay */}
                <motion.div
                    className="absolute inset-0 bg-primaryColor-500"
                    style={{ transformOrigin: "left center" }}
                    variants={overlayVariants}
                    transition={transition}
                />

                {/* content */}
                <span className={`relative z-10 flex items-center ${dark ? "text-background-dark" : "text-white"}`}>
                    {/* arrow icon on hover */}
                    <motion.span
                        className="mr-2 lg:flex items-center hidden"
                        variants={arrowVariants}
                        transition={{ ...transition, duration: 0.3 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </motion.span>

                    {/* optional icon */}
                    {icon && <img src={icon.src} alt="" className="mr-4" />}

                    {children}
                </span>
            </motion.button>
        </Link>
    );
}
