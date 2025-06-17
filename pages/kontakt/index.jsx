// pages/leistungen.jsx
import Head from "next/head";

import ContactSection from "@/sections/contact";

export default function Referenzen() {
    return (
        <>
            <Head>
                <title>Kontakt – Revotec GmbH </title>
                <meta
                    name="description"
                    content="Unsere Leistungen in technischer Beratung, Projektmanagement & ESG-Transformation"
                />
            </Head>
            <ContactSection></ContactSection>
        </>
    );
}
