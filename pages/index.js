import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
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

// SANITY
import client from "../client";

import urlFor from "@/functions/urlFor";

import { withStaticGlobals } from "@/lib/withGlobals";
import { useGlobals } from "@/context/GlobalsContext";
import { normalizePageWithHrefs } from "@/utils/normalizePage";

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

// useEffect(() => {
//     console.log(dataStartPage);
// }, []);

export default function Home({ dataStartPage, dataReferenzen, logos, posts }) {
    useEffect(() => {
        console.log(dataStartPage, dataReferenzen, logos, posts);
        console.log(dataStartPage.sections.filter((e) => e._type == "mainHero"));
        console.log(sectionFiltered("mainHero"));
    }, [dataStartPage]);

    function sectionFiltered(type) {
        return dataStartPage.sections.filter((e) => e._type == type)[0];
    }

    console.log(sectionFiltered("mainHero"));
    console.log(sectionFiltered("servicesShowcase"));

    return (
        <>
            {/* SEO */}
            <Meta data={seoData} />

            <Hero
                // bgColor="#111827"
                gradientFrom="rgba(245,130,31,0.15)"
                gradientTo="transparent"
                headline={sectionFiltered("mainHero").headline}
                subline={sectionFiltered("mainHero").subline}
                buttonText={sectionFiltered("mainHero")?.actions[0]?.label}
                buttonLink={sectionFiltered("mainHero")?.actions[0]?.href}
                imageSrc={sectionFiltered("mainHero").media}
                imageAlt="Modernes Bürogebäude"
                phone="+49 5555ff55555"
                email="info@revotec-gmbh.de"
            />
            <TextImg
                bottomButton
                buttonText={sectionFiltered("servicesShowcase").cta.label}
                buttonLink={"/leistungen"}
                title={sectionFiltered("servicesShowcase").title}
                description={sectionFiltered("servicesShowcase").intro}
            >
                <ExpandingCardsGrid cards={sectionFiltered("servicesShowcase").cards}></ExpandingCardsGrid>
            </TextImg>
            <ReferencesSlider items={dataReferenzen} />
            <TextImg
                buttonText={sectionFiltered("textImage").cta.label}
                title={sectionFiltered("textImage").headline}
                buttonLink={sectionFiltered("textImage").cta.href}
                description={sectionFiltered("textImage").intro}
                bottomButton
            >
                <Image
                    src={urlFor(sectionFiltered("textImage").image.asset).url()}
                    alt="Unser Team"
                    width={800}
                    height={500}
                    style={{ objectFit: "cover" }}
                    className=""
                />
            </TextImg>
            <Logos data={logos.logos}></Logos>
            <NewsOverview data={posts}></NewsOverview>
            <ContactOverview gradientFrom="rgba(245,130,31,0.15)" gradientTo="transparent"></ContactOverview>
        </>
    );
}

export const getStaticProps = withStaticGlobals(async () => {
    // 1) Rohdaten holen (alles)
    const rawStartPage = await client.fetch(`*[_type == "startPage"][0]`);
    const logos = await client.fetch(`*[_type == "logosSettings"][0]{
  logos[]{
    _key,
    "url": asset->url,
    alt
  }
}
`);
    const referenzen = await client.fetch(`*[_type == "referenz"] {
      title,
      "slug": slug.current,
      heroTitle,
      heroIntro,
      heroImage{asset->{url}, alt},
      contentTitle,
      contentIntro,
      contentText,
      contentImages[]{asset->{url}, alt},
      ergebnisText,
      ergebnisImage{asset->{url}, alt},
      datum,
      ort,
      auftraggeber,
      kategorie->{title, "slug": slug.current},
      seo
    }`);

    const postFetch = await client.fetch(
        `  *[_type=="news"]{
    headline, subline, date,
    image{asset->{url, metadata{lqip}}, alt},
    body,
    seo,
    slug
  
    }`
    );

    // 2) Einmalig normalisieren: hrefs bauen, interne Refs deref'en
    const dataStartPage = await normalizePageWithHrefs(rawStartPage, client);
    const dataReferenzen = await normalizePageWithHrefs(referenzen, client);
    const posts = await normalizePageWithHrefs(postFetch, client);

    return { props: { dataStartPage, dataReferenzen, logos, posts }, revalidate: 10 };
});
