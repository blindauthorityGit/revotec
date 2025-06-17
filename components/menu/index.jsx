"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CTAButton } from "@/components/buttons";
import LogoDark from "@/assets/logo.svg";
import LogoLight from "@/assets/logoLight.svg";

export default function Menu() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();

    // close mobile menu on route change
    useEffect(() => {
        const handleRoute = () => setMobileOpen(false);
        router.events.on("routeChangeStart", handleRoute);
        return () => router.events.off("routeChangeStart", handleRoute);
    }, [router.events]);

    // watch scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 250);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { href: "/leistungen", label: "Leistungen" },
        { href: "/referenzen", label: "Referenzen" },
        { href: "/team", label: "Team" },
        { href: "/news", label: "News" },
        { href: "/kontakt", label: "Kontakt" },
    ];

    const linkClass = scrolled
        ? "text-gray-800 hover:text-primaryColor-500 transition-colors"
        : "text-white hover:text-primaryColor-300 transition-colors";

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50">
                {/* background transition */}
                <motion.div
                    className="absolute inset-0 bg-white shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: scrolled ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />

                <div className="relative container mx-auto px-6 py-4 flex items-center justify-between">
                    {/* logo */}
                    <Link href="/" className="flex-shrink-0 z-10">
                        <img src={scrolled ? LogoLight.src : LogoDark.src} alt="Logo" className="h-6 md:h-8" />
                    </Link>

                    {/* desktop nav */}
                    <nav className="hidden lg:flex space-x-8 font-medium">
                        {navLinks.map((l) => (
                            <Link key={l.href} href={l.href} className={linkClass}>
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA + mobile toggle */}
                    <div className="flex items-center space-x-4 z-10">
                        <div className="hidden lg:block">
                            <CTAButton link="/kontakt">Beratung buchen</CTAButton>
                        </div>
                        <button
                            onClick={() => setMobileOpen((o) => !o)}
                            className={`lg:hidden focus:outline-none ${scrolled ? "text-gray-800" : "text-white"}`}
                        >
                            {mobileOpen ? <FiX className="text-black" size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* mobile drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute top-0 right-0 w-full h-full bg-white shadow-xl flex flex-col px-6 pt-24 pb-8"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 260, damping: 30 }}
                        >
                            {/* links */}
                            <div className="space-y-4 flex-1 overflow-auto">
                                {navLinks.map((l) => (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        className="flex items-center text-lg font-semibold text-gray-800 hover:text-primaryColor-500 transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                ))}

                                <div className="mt-6">
                                    <CTAButton link="/kontakt" variant="light" className="w-full">
                                        Beratung buchen
                                    </CTAButton>
                                </div>
                            </div>

                            {/* divider */}
                            <div className="border-t border-gray-200 my-4" />

                            {/* contact info */}
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-center gap-2">
                                    <FiPhone className="text-primaryColor-500" />
                                    <a href="tel:+49555555555" className="hover:underline">
                                        +49 5555 5555
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiMail className="text-primaryColor-500" />
                                    <a href="mailto:info@revotec-gmbh.de" className="hover:underline">
                                        info@revotec-gmbh.de
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaWhatsapp className="text-green-500" />
                                    <a
                                        href="https://wa.me/49555555555"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:underline"
                                    >
                                        WhatsApp Chat
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}
