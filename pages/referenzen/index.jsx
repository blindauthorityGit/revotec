// pages/leistungen.jsx
import Head from "next/head";
import Image from "next/image";
import SubPageHero from "@/sections/subPageHero";
import ServiceHighlights from "@/sections/textImg/serviceSection";
import CTASection from "@/sections/CTASection";
import ReferenzenOverview from "@/sections/referenzen/referenzenOverview";
import Logos from "@/sections/logos";
import ContactOverview from "@/sections/contactOverview";

import Card1 from "@/assets/card1.png";
import Card2 from "@/assets/card2.png";
import Card3 from "@/assets/card3.png";
import HeroReferenzen from "@/assets/heroReferenzen.png";

export default function Referenzen() {
    return (
        <>
            <Head>
                <title>Referenzen – Revotec GmbH</title>
                <meta
                    name="description"
                    content="Unsere Leistungen in technischer Beratung, Projektmanagement & ESG-Transformation"
                />
            </Head>

            {/* Subpage-Hero */}
            <SubPageHero
                title={
                    <>
                        <span className="text-primaryColor-500"> Ergebnisse </span> , die für sich sprechen
                    </>
                }
                subtitle="Von technischer Due Diligence bis ESG-Transformation – ein Auszug aus erfolgreich umgesetzten Projekten."
                ctaText="Kontakt aufnehmen"
                ctaLink="/kontakt"
                bgImage={HeroReferenzen.src}
                bgGradientFrom="rgba(0,0,0,0.6)"
                bgGradientTo="transparent"
            />
            <ReferenzenOverview></ReferenzenOverview>

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
            <CTASection />
            <Logos></Logos>
            <ContactOverview gradientFrom="rgba(245,130,31,0.15)" gradientTo="transparent"></ContactOverview>
        </>
    );
}
