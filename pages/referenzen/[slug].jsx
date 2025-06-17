// pages/leistungen.jsx
import Head from "next/head";
import Image from "next/image";
import SubPageHero from "@/sections/SubpageHero";
import ServiceHighlights from "@/sections/textImg/serviceSection";
import CTASection from "@/sections/CTASection";
import ReferenzDetail from "@/sections/referenzen/referenceDetail";
import Logos from "@/sections/logos";
import ContactOverview from "@/sections/contactOverview";

import Card1 from "@/assets/card1.png";
import Card2 from "@/assets/card2.png";
import Card3 from "@/assets/card3.png";
import HeroReferenzen from "@/assets/HeroReferenzen.png";
import references from "@/data/referenzen";

export default function Referenzen({ reference }) {
    console.log(reference);
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
                title={reference.title}
                subtitle={reference.intro}
                ctaText="Kontakt aufnehmen"
                ctaLink="/kontakt"
                bgImage={HeroReferenzen.src}
                bgGradientFrom="rgba(0,0,0,0.6)"
                bgGradientTo="transparent"
            />
            <ReferenzDetail reference={reference}></ReferenzDetail>

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

export async function getStaticPaths() {
    const paths = references.map((ref) => ({ params: { slug: ref.slug } }));
    console.log(paths);
    return { paths, fallback: false }; // alle Referenz-Seiten vorab generieren
}

export async function getStaticProps({ params }) {
    const reference = references.find((ref) => ref.slug === params.slug);
    return { props: { reference } };
}
