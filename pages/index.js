import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

import Hero from "@/sections/hero";
import TextImg from "@/sections/textImg";
import ReferencesSlider from "@/sections/referenzen";
import Logos from "@/sections/logos";
import NewsOverview from "@/sections/newsOverview";
import ContactOverview from "@/sections/contactOverview";
import HeroImg from "@/assets/hero.png";
import Team from "@/assets/team.jpg";
import Menu from "@/components/menu";
import { ExpandingCardsGrid } from "@/components/expandingCards";

import Card1 from "@/assets/card1.png";
import Card2 from "@/assets/card2.png";
import Card3 from "@/assets/card3.png";
import Meta from "@/components/SEO";

import Logo from "@/assets/logoLight.svg";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const myCards = [
    {
        image: Card1.src,
        title: "Technische Beratung",
        text: "Wir unterstützen mit fundierter technischer Expertise…",
        linkText: "Mehr erfahren",
        linkHref: "/leistungen/technische-beratung",
    },
    {
        image: Card2.src,
        title: "Bauprojektmanagement",
        text: "Reibungslose Planung & Ausführung Ihrer Bauvorhaben.",
        linkText: "Mehr erfahren",
        linkHref: "/leistungen/bauprojektmanagement",
    },
    {
        image: Card3.src,
        title: "ESG-Transformation",
        text: "Nachhaltige CO₂-Reduktion und Effizienzsteigerung.",
        linkText: "Mehr erfahren",
        linkHref: "/leistungen/esg-transformation",
    },
];

const refs = [
    {
        image: Card1.src,
        title: "Bestandsaufnahme Bürozentrum Berlin",
        text: "In einem 15.000 m² großen Bürokomplex in Berlin-Mitte führten wir eine umfassende technische Gebäudeaufnahme durch – von der Bestandsvermessung bis zur CAFM-Datenaufbereitung.",
        tag: "Technische Beratung",
        linkText: "Mehr erfahren",
        linkHref: "referenzen/bestandsaufnahme-buerozentrum-berlin",
    },
    {
        image: Card2.src,
        title: "Brandschutz-Kontrollen Industriehalle Hamburg",
        text: "Regelmäßige Sonderbaukontrollen und Brandschau-Begleitung für eine Logistikimmobilie in Hamburg-Harburg.",
        tag: "Technische Beratung",
        linkText: "Mehr erfahren",
        linkHref: "/referenzen/brandschutz-kontrolle-industriehalle-hamburg",
    },
    {
        image: Card1.src,
        title: "Projektmanagement Wohnquartier München",
        text: "Steuerung und Überwachung eines Neubau-Wohnquartiers mit 120 Wohneinheiten, inkl. HOAI-LP5 und Mängelbeseitigung.",
        tag: "Bauprojektmanagement",
        linkText: "Mehr erfahren",
        linkHref: "/referenzen/projektmanagement-wohnquartier-muenchen",
    },
    {
        image: Card2.src,
        title: "Nachhaltigkeitsstrategie Verwaltungsgebäude Köln",
        text: "Erstellung eines Sanierungsfahrplans und ESG-Qualitätsreports für ein Verwaltungsgebäude der Stadt Köln.",
        tag: "ESG-Transformation",
        linkText: "Mehr erfahren",
        linkHref: "/referenzen/nachhaltigkeitsstrategie-verwaltungsgebaeude-koeln",
    },
    // …more items
];

const seoData = {
    mainSEO: {
        title: "Revotec GmbH – Technische Beratung, Projektmanagement & ESG-Transformation",
        description:
            "Revotec GmbH bietet fundierte technische Beratung, ganzheitliches Bauprojektmanagement und maßgeschneiderte ESG-Transformationskonzepte für zukunftssichere Immobilienprojekte.",
        keywords: [
            "Revotec",
            "technische Beratung",
            "Bauprojektmanagement",
            "ESG Transformation",
            "Immobilien",
            "CAFM",
            "SAP Integration",
        ],
    },
    advancedSEO: {
        // Für og:image verwenden wir hier das Hero‐Bild
        // urlFor erwartet ein Sanity‐Objekt – wir lassen es null, damit dann das Logo greift
        ogImage: null,
        // Twitter‐Image (wird aus data.advancedSEO.description befüllt)
        description: Logo.src,
    },
};

console.log("Refs slider is", ReferencesSlider);

export default function Home() {
    return (
        <>
            {/* SEO */}
            <Meta data={seoData} />

            <Hero
                // bgColor="#111827"
                gradientFrom="rgba(245,130,31,0.15)"
                gradientTo="transparent"
                headline={
                    <>
                        Ihr Partner für technische Beratung und{" "}
                        <span className="text-primaryColor-500"> Immobilien-Transformation</span>
                    </>
                }
                subline="Vom Baubeginn über die ESG-Transformation bis zur Digitalisierung des FM-Gebäudebetriebs – wir begleiten Sie sicher durch jede Herausforderung."
                buttonText="Mehr erfahren"
                buttonLink="/leistungen"
                imageSrc={HeroImg.src}
                imageAlt="Modernes Bürogebäude"
                phone="+49 555555555"
                email="info@revotec-gmbh.de"
            />
            <TextImg
                bottomButton
                buttonText="Alle Leistungen auf einen Blick"
                buttonLink="./leistungen"
                title="Leistungen"
                description="Wir unterstützen mit fundierter technischer Expertise – von der Gebäudeaufnahme über die Integration in CAFM-Systeme bis hin zur Begleitung bei Brandschutz- und Sonderbaukontrollen."
            >
                <ExpandingCardsGrid cards={myCards}></ExpandingCardsGrid>
            </TextImg>
            <ReferencesSlider items={refs} />
            <TextImg
                buttonText="Das Team entdecken"
                title="Das Team hinter der Technik"
                buttonLink="./team"
                description="Unsere Stärke liegt in der Erfahrung – lernen Sie die Expert:innen kennen, die jedes Projekt mit Fachwissen, Weitblick und Engagement vorantreiben."
                bottomButton
            >
                <Image
                    src={Team}
                    alt="Unser Team"
                    width={800}
                    height={500}
                    style={{ objectFit: "cover" }}
                    className=""
                />
            </TextImg>
            <Logos></Logos>
            <NewsOverview></NewsOverview>
            <ContactOverview gradientFrom="rgba(245,130,31,0.15)" gradientTo="transparent"></ContactOverview>
        </>
    );
}
