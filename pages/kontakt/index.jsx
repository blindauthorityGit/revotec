// pages/leistungen.jsx
import Head from "next/head";

import ContactSection from "@/sections/contact";
import SEO from "@/components/SEO";

// SANITY
import client from "@/client";

import { withStaticGlobals } from "@/lib/withGlobals";
import { normalizePageWithHrefs } from "@/utils/normalizePage";

export default function Referenzen({ data }) {
    console.log(data);
    return (
        <>
            <SEO
                seo={data.seo}
                title={`${data.seo.title} – Revotec GmbH`}
                description={data.seo.description}
                image={data.seo.ogImage}
            />
            <ContactSection data={data}></ContactSection>
        </>
    );
}

export async function getStaticProps() {
    const data = await client.fetch(`
    *[_type == "beratungPage"][0]{
      headline,
      intro,
      phone,
      email,
      address,
      seo
    }
  `);

    return { props: { data: data || null }, revalidate: 60 };
}
