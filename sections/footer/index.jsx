import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Logo from "@/assets/logoLight.svg"; // passe Pfad nach Bedarf an
import { P } from "@/typography";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-background-dark py-16 font-body">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Logo & Kontakt */}
                <div className="space-y-6">
                    <div className="w-40">
                        <Image src={Logo.src} alt="Revotec" width={200} height={50} quality={100} />
                    </div>
                    <P className="text-sm">
                        Wir bieten maßgeschneiderte technische Beratung und Projektmanagement für nachhaltige und
                        effiziente Gebäude.
                    </P>
                    <div className="flex items-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <Link href="tel:+49555555555" className="text-sm hover:text-primaryColor-500">
                            +49 555555555
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5" />
                        <Link href="mailto:info@revotec-gmbh.de" className="text-sm hover:text-primaryColor-500">
                            info@revotec-gmbh.de
                        </Link>
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/leistungen" className="hover:text-primaryColor-500">
                                Leistungen
                            </Link>
                        </li>
                        <li>
                            <Link href="/referenzen" className="hover:text-primaryColor-500">
                                Referenzen
                            </Link>
                        </li>
                        <li>
                            <Link href="/team" className="hover:text-primaryColor-500">
                                Über uns
                            </Link>
                        </li>
                        <li>
                            <Link href="/news" className="hover:text-primaryColor-500">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakt" className="hover:text-primaryColor-500">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Rechtliches */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/datenschutz" className="hover:text-primaryColor-500">
                                Datenschutz
                            </Link>
                        </li>
                        <li>
                            <Link href="/impressum" className="hover:text-primaryColor-500">
                                Impressum
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-300 pt-6 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} Revotec GmbH. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
}
