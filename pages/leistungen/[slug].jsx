// pages/leistungen/[slug].jsx
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { services } from "@/data/services";
import SubPageHero from "@/sections/subPageHero";
import { H2, H3, H4, P } from "@/typography";
import { CTAButton } from "@/components/buttons";
import CTASection from "@/sections/CTASection";
import { PT } from "@/components/text";
// SANITY

import client from "@/client";
import urlFor from "@/functions/urlFor";

import { withStaticGlobals } from "@/lib/withGlobals";
import { normalizePageWithHrefs } from "@/utils/normalizePage";

export async function getStaticPaths() {
    const slugs = await client.fetch(`*[_type == "leistung" && defined(slug.current)]{ "slug": slug.current }
`);
    const paths = slugs.map((ref) => ({ params: { slug: ref.slug } }));

    return { paths, fallback: false };
}

export const getStaticProps = withStaticGlobals(async ({ params }) => {
    const serviceFetch = await client.fetch(
        `*[_type == "leistung" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  heroHeadline,
  heroIntro,
  heroImage{asset->{url}, alt},
  contentIntro,
  sections[]{
    _key,
    _type == "textImage" => {
      headline, intro, body,
      cta{
        label,
        "href": select(
          defined(link.url) => link.url,
          defined(link.internal) => "/" + link.internal->slug.current
        )
      },
      image{asset->{url}, alt},
      imageSide, background, paddingY
    }
  },
  benefitsTitle,
  benefits,
  seo
}`,
        { slug: params.slug }
    );

    const service = await normalizePageWithHrefs(serviceFetch, client);

    return { props: { service } };
});

export default function ServiceDetail({ service }) {
    console.log(service);
    const router = useRouter();
    if (router.isFallback) return <p>Loading…</p>;

    return (
        <>
            <Head>
                <title>{service.title} – Leistungen</title>
                <meta name="description" content={service.claim} />
            </Head>

            <SubPageHero
                title={service.heroHeadline}
                subtitle={service.heroIntro}
                bgImage={service.heroImage.asset.url}
            />

            {/* Intro */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    {/* <P className="text-lg leading-relaxed whitespace-pre-wrap">{service.intro}</P> */}
                    <PT value={service.contentIntro} className="prose max-w-none mb-6" />
                </div>
            </section>

            {/* Detaillierte Leistungen */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 space-y-12">
                    {service.sections.map((d, idx) => (
                        <div key={idx} className="grid md:grid-cols-2 gap-8">
                            <div>
                                <H3 klasse="text-2xl mb-4">{d.headline}</H3>
                                <PT value={d.body} className="prose max-w-none mb-6" />
                            </div>
                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                <Image src={d.image.asset.url} alt={d.title} fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Vorteile */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <H2 klasse="text-3xl mb-6">Ihre Vorteile</H2>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
                        {service.benefits.map((b, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-3 text-primaryColor-500">✔︎</span>
                                <P klasse="font-semibold">{b}</P>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Projektbeispiele */}
            {/* <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12">
                    <H2 klasse="text-3xl mb-8">Projektbeispiele</H2>
                    {service.examples.map((e, i) => (
                        <div key={i} className="mb-6">
                            <H3 klasse="text-xl">{e.title}</H3>
                            <P>{e.text}</P>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Call to Action */}
            <CTASection />
        </>
    );
}
