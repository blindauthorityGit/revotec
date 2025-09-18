// pages/leistungen.jsx
import Head from "next/head";
import Image from "next/image";
import SubPageHero from "@/sections/subPageHero";
import ServiceHighlights from "@/sections/textImg/serviceSection";
import CTASection from "@/sections/CTASection";
import ReferenzDetail from "@/sections/referenzen/referenceDetail";
import Logos from "@/sections/logos";
import ContactOverview from "@/sections/contactOverview";
import SEO from "@/components/SEO";

import Card1 from "@/assets/card1.png";
import Card2 from "@/assets/card2.png";
import Card3 from "@/assets/card3.png";
import HeroReferenzen from "@/assets/heroReferenzen.png";
import references from "@/data/referenzen";

// SANITY

import client from "@/client";
import urlFor from "@/functions/urlFor";

import { withStaticGlobals } from "@/lib/withGlobals";
import { normalizePageWithHrefs } from "@/utils/normalizePage";

export default function Referenzen({ reference }) {
    console.log(reference);
    return (
        <>
            <SEO
                seo={reference.seo}
                title={`${reference.heroTitle} – Revotec GmbH`}
                description={reference.heroIntro}
                image={reference.heroImage?.asset?.url}
            />

            {/* Subpage-Hero */}
            <SubPageHero
                title={reference.heroTitle}
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
    const slugs = await client.fetch(`*[_type == "referenz" && defined(slug.current)]{"slug": slug.current}`);
    const paths = slugs.map((ref) => ({ params: { slug: ref.slug } }));

    return { paths, fallback: false };
}

export const getStaticProps = withStaticGlobals(async ({ params }) => {
    const reference = await client.fetch(
        `*[_type == "referenz" && slug.current == $slug][0]{
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
    }`,
        { slug: params.slug }
    );

    return { props: { reference } };
});
