// pages/leistungen.jsx
import Head from "next/head";
import Image from "next/image";
import SubPageHero from "@/sections/subPageHero";
import ServiceHighlights from "@/sections/textImg/serviceSection";
import CTASection from "@/sections/CTASection";
import ReferenzenOverview from "@/sections/referenzen/referenzenOverview";
import Logos from "@/sections/logos";
import ContactOverview from "@/sections/contactOverview";
import SEO from "@/components/SEO";

import Card1 from "@/assets/card1.png";
import Card2 from "@/assets/card2.png";
import Card3 from "@/assets/card3.png";
import HeroReferenzen from "@/assets/heroReferenzen.png";
import { PT, PTHeadline } from "@/components/text";
import { H1 } from "@/typography";

// SANITY
import client from "@/client";

import { withStaticGlobals } from "@/lib/withGlobals";
import { normalizePageWithHrefs } from "@/utils/normalizePage";

export default function Referenzen({ dataReferenzen, dataReferenz }) {
    console.log(dataReferenzen, dataReferenz);
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
                title={dataReferenzen.heroHeadline}
                subtitle={dataReferenzen.heroIntro}
                ctaText="Kontakt aufnehmen"
                ctaLink="/kontakt"
                bgImage={HeroReferenzen.src}
                bgGradientFrom="rgba(0,0,0,0.6)"
                bgGradientTo="transparent"
            />
            <ReferenzenOverview projects={dataReferenz}></ReferenzenOverview>

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

export const getStaticProps = withStaticGlobals(async () => {
    // 1) Rohdaten holen (alles)
    const referenzen = await client.fetch(`*[_type == "referencesPage"][0]`);

    const reference = await client.fetch(
        `*[_type == "referenz"]{
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
    }`
    );
    // 2) Einmalig normalisieren: hrefs bauen, interne Refs deref'en
    const dataReferenzen = await normalizePageWithHrefs(referenzen, client);
    const dataReferenz = await normalizePageWithHrefs(reference, client);

    return { props: { dataReferenzen, dataReferenz }, revalidate: 10 };
});
