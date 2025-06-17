// pages/leistungen.jsx
import Head from "next/head";
import Image from "next/image";
import SubPageHero from "@/sections/SubpageHero";
import ServiceHighlights from "@/sections/textImg/serviceSection";
import CTASection from "@/sections/CTASection";
import NewsOverview from "@/sections/news/newsOverview";
import Logos from "@/sections/logos";
import ContactSection from "@/sections/contact";

import Card1 from "@/assets/card1.png";
import Card2 from "@/assets/card2.png";
import Card3 from "@/assets/card3.png";
import HeroReferenzen from "@/assets/HeroReferenzen.png";

export default function Referenzen() {
    return (
        <>
            <Head>
                <title>Referenzen – Revotec GmbH </title>
                <meta
                    name="description"
                    content="Unsere Leistungen in technischer Beratung, Projektmanagement & ESG-Transformation"
                />
            </Head>
            <ContactSection></ContactSection>
        </>
    );
}
