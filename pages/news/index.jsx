// pages/leistungen.jsx
import Head from "next/head";
import Image from "next/image";
import SubPageHero from "@/sections/subPageHero";
import ServiceHighlights from "@/sections/textImg/serviceSection";
import CTASection from "@/sections/CTASection";
import NewsOverview from "@/sections/news/newsOverview";
import Logos from "@/sections/logos";
import ContactOverview from "@/sections/contactOverview";
import SEO from "@/components/SEO";

import Card1 from "@/assets/card1.png";
import Card2 from "@/assets/card2.png";
import Card3 from "@/assets/card3.png";
import HeroReferenzen from "@/assets/heroReferenzen.png";

// SANITY
import client from "@/client";

import { withStaticGlobals } from "@/lib/withGlobals";
import { normalizePageWithHrefs } from "@/utils/normalizePage";

export default function Referenzen({ news, post }) {
    console.log(news, post);
    return (
        <>
            <SEO
                seo={news.seo}
                title={`${news.seo.title} – Revotec GmbH`}
                description={news.seo.description}
                image={news.seo.ogImage}
            />

            {/* Subpage-Hero */}
            <SubPageHero
                title={news.heroHeadline}
                subtitle={news.heroIntro}
                ctaText="Kontakt aufnehmen"
                ctaLink="/kontakt"
                bgImage={HeroReferenzen.src}
                bgGradientFrom="rgba(0,0,0,0.6)"
                bgGradientTo="transparent"
            />
            <NewsOverview data={post}></NewsOverview>

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
    const newsFetch = await client.fetch(`*[_type == "newsPage"][0]`);

    // 2) Einmalig normalisieren: hrefs bauen, interne Refs deref'en
    const news = await normalizePageWithHrefs(newsFetch, client);

    const postFetch = await client.fetch(
        `  *[_type=="news"]{
    headline, subline, date,
    image{asset->{url, metadata{lqip}}, alt},
    body,
    slug
    }`
    );

    const post = await normalizePageWithHrefs(postFetch, client);

    return { props: { news, post }, revalidate: 10 };
});
