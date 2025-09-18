// pages/leistungen.jsx
import Head from "next/head";
import Image from "next/image";
import SubPageHero from "@/sections/subPageHero";
import TeamSection from "@/sections/teamOverview";
import CTASection from "@/sections/CTASection";
import ReferencesSlider from "@/sections/referenzen";
import Logos from "@/sections/logos";
import ContactOverview from "@/sections/contactOverview";
import RichTextImageSection from "@/sections/textImg/richTextImageSection";
import { P } from "@/typography";
import Card1 from "@/assets/card1.png";
import History from "@/assets/history.png";
import HeroTeam from "@/assets/heroTeam.png";
import SEO from "@/components/SEO";
import { PT } from "@/components/text";
import Meta from "@/components/SEO";

import Logo from "@/assets/logoLight.svg";

// SANITY
import client from "@/client";

import { withStaticGlobals } from "@/lib/withGlobals";
import { normalizePageWithHrefs } from "@/utils/normalizePage";

export default function Team({ team }) {
    console.log(team);
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

    return (
        <>
            {/* SEO */}
            <SEO
                seo={team.seo}
                title={`${team.seo.title} – Revotec GmbH`}
                description={team.seo.description}
                image={team.seo.ogImage}
            />

            {/* Subpage-Hero */}
            <SubPageHero
                title={team.heroHeadline}
                subtitle={team.heroIntro}
                ctaText="Kontakt aufnehmen"
                ctaLink="/kontakt"
                bgImage={HeroTeam.src}
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
            <TeamSection data={team.members} />
            {/* <PT value={team.history[0].text} className="prose max-w-none mb-6" /> */}

            <RichTextImageSection
                title={team.historyTitle}
                topContent={
                    <>
                        <PT value={team.history[0].text} className="prose max-w-none mb-6" />
                    </>
                }
                topImage={{ src: team.history[0].image.asset.url, alt: "Baustelle im Abendlicht" }}
                bottomContent={
                    <>
                        <PT value={team.history[1].text} className="prose max-w-none mb-6" />
                    </>
                }
                bottomImage={{ src: team.history[1].image.asset.url, alt: "Moderne Gebäude von oben" }}
            />
            <CTASection />
            <Logos></Logos>
            <ContactOverview gradientFrom="rgba(245,130,31,0.15)" gradientTo="transparent"></ContactOverview>
        </>
    );
}

export const getStaticProps = withStaticGlobals(async () => {
    const teamFetch = await client.fetch(`
    *[_type == "teamPage"][0]{
      heroHeadline,
      heroIntro,
      members[]{
        _key, name, role, bio,
        image{asset->{url, metadata{lqip}}, alt}
      },
      historyTitle,
      history[]{
        _key, text,
        image{asset->{url, metadata{lqip}}, alt},
        imageSide
      },
      seo
    }
  `);

    const team = await normalizePageWithHrefs(teamFetch, client);

    return { props: { team }, revalidate: 10 };
});
