// pages/leistungen.jsx
import Head from "next/head";
import Image from "next/image";
import SubPageHero from "@/sections/subPageHero";
import ServiceHighlights from "@/sections/textImg/serviceSection";
import CTASection from "@/sections/CTASection";
import ReferencesSlider from "@/sections/referenzen";
import Logos from "@/sections/logos";
import ContactOverview from "@/sections/contactOverview";

import Card1 from "@/assets/card1.png";
import Card2 from "@/assets/card2.png";
import Card3 from "@/assets/card3.png";
import HeroLeistungen from "@/assets/heroLeistungen2.png";

export default function Leistungen() {
    const services = [
        {
            title: "Technische Beratung",
            intro: (
                <>
                    Wir beginnen mit einer umfassenden Bestandsaufnahme Ihrer Immobilie, um alle technischen
                    Gegebenheiten detailliert zu erfassen. Auf Basis dieser Analyse entwickeln wir maßgeschneiderte
                    Konzepte für die Implementierung in moderne CAFM-Systeme – inklusive nahtloser SAP-Integration.
                    <br />
                </>
            ),
            bullets: [
                "technische Gebäudeaufnahme für die FM-Betreuung",
                "Anlagenimplementierung in CAFM-Systeme inkl. SAP-Connect",
                "Bauherrenbegleitung bei Brandschauen und Sonderbaukontrollen",
                "Überprüfung und Aktualisierung von Brandschutzvorgaben im Gebäude",
                "Technische Due Diligence (TDD) für Bestandsgebäude bei An-/Verkaufstransaktionen",
            ],
            imageSrc: Card1.src,
            buttonText: "Mehr erfahren",
            buttonLink: "/leistungen/technische-beratung",
        },
        {
            title: "Bauprojektmanagement",
            intro: (
                <>
                    Von der Projektplanung bis zur schlüsselfertigen Übergabe bieten wir Ihnen ganzheitliches
                    Bauprojektmanagement nach HOAI ab Leistungsphase 5. Unsere erfahrenen Bauleiter koordinieren alle
                    Gewerke, überwachen Termine und Kosten und gewährleisten die Qualität Ihrer Bauvorhaben.
                    <br />
                </>
            ),
            bullets: [
                "ganzheitliches Projektmanagement",
                "Übernahme der HOAI-Bauleitung ab LP 5",
                "ganzheitliche Begleitung bei der Beseitigung von Gebäudemängeln",
                "Plausibilitätsprüfung von laufenden Maßnahmen",
            ],
            imageSrc: Card2.src,
            buttonText: "Mehr erfahren",
            buttonLink: "/leistungen/bauprojektmanagement",
        },
        {
            title: "ESG-Transformation",
            intro: (
                <>
                    Mit unserer ESG-Transformation machen wir Ihre Bestandsimmobilie fit für nachhaltige, digitale und
                    zukunftsfähige Anforderungen. Wir führen eine gebäudetechnische Bestandsaufnahme durch und bewerten
                    den Zustand präzise – inklusive Restnutzungsdauer.
                    <br />
                </>
            ),
            bullets: [
                "gebäudetechnische Bestandsaufnahme",
                "Zustandsbewertung mit Ermittlung der Restnutzungsdauer",
                "Bewertung und Erstellung von Sanierungsfahrplänen",
                "Erstellung von ESG-Transformationskonzepten",
            ],
            imageSrc: Card3.src,
            buttonText: "Mehr erfahren",
            buttonLink: "/leistungen/esg-transformation",
        },
    ];

    const refs = [
        {
            image: Card1.src,
            title: "Referenz 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit…",
            tag: "ESG-Transformation",
            linkText: "Mehr erfahren",
            linkHref: "/referenzen/1",
        },
        {
            image: Card2.src,
            title: "Referenz 2",
            text: "Vestibulum ante ipsum primis in faucibus orci luctus et…",
            tag: "Bauprojektmanagement",
            linkText: "Mehr erfahren",
            linkHref: "/referenzen/2",
        },
        {
            image: Card1.src,
            title: "Referenz 3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit…",
            tag: "ESG-Transformation",
            linkText: "Mehr erfahren",
            linkHref: "/referenzen/1",
        },
        {
            image: Card2.src,
            title: "Referenz 4",
            text: "Vestibulum ante ipsum primis in faucibus orci luctus et…",
            tag: "Bauprojektmanagement",
            linkText: "Mehr erfahren",
            linkHref: "/referenzen/2",
        },
        // …more items
    ];

    return (
        <>
            <Head>
                <title>Leistungen – Revotec GmbH</title>
                <meta
                    name="description"
                    content="Unsere Leistungen in technischer Beratung, Projektmanagement & ESG-Transformation"
                />
            </Head>

            {/* Subpage-Hero */}
            <SubPageHero
                title={
                    <>
                        Unsere <span className="text-primaryColor-500">Leistungen</span>
                    </>
                }
                subtitle="Für nachhaltige, effiziente und zukunftssichere Immobilienprojekte"
                ctaText="Kontakt aufnehmen"
                ctaLink="/kontakt"
                bgImage={HeroLeistungen.src}
                bgGradientFrom="rgba(0,0,0,0.6)"
                bgGradientTo="transparent"
            />

            {/* Mapping aller Services mit ServiceSection */}
            {/* {services.map((svc, i) => (
                <ServiceSection
                    key={i}
                    title={svc.title}
                    intro={svc.intro}
                    bullets={svc.bullets}
                    imageSrc={svc.imageSrc}
                    buttonText={svc.buttonText}
                    buttonLink={svc.buttonLink}
                    reverse={i % 2 === 1}
                />
            ))} */}
            <ServiceHighlights services={services} />
            <CTASection />
            <ReferencesSlider items={refs} />
            <Logos></Logos>
            <ContactOverview gradientFrom="rgba(245,130,31,0.15)" gradientTo="transparent"></ContactOverview>
        </>
    );
}
