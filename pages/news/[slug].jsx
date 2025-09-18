// pages/news/[slug].jsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/data/news";
import { P, H2 } from "@/typography";

import SEO from "@/components/SEO";
import { PT } from "@/components/text";
import Meta from "@/components/SEO";

import Logo from "@/assets/logoLight.svg";

// SANITY
import client from "@/client";

import { withStaticGlobals } from "@/lib/withGlobals";
import { normalizePageWithHrefs } from "@/utils/normalizePage";

export default function NewsDetail({ post }) {
    console.log(post);
    return (
        <>
            {/* <SEO
                seo={team.seo}
                title={`${team.seo.title} – Revotec GmbH`}
                description={team.seo.description}
                image={team.seo.ogImage}
            /> */}

            <section className="py-16 lg:py-30 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 space-y-8">
                    <Link href="/news" passHref>
                        <div className="text-sm text-gray-500 hover:underline">&larr; Zurück zu News</div>
                    </Link>

                    <div className="space-y-4 text-center">
                        <div className="text-sm text-gray-500">{post.date}</div>
                        <H2 klasse="text-3xl lg:text-4xl font-bold">{post.headline}</H2>
                        <P klasse="max-w-2xl mx-auto text-gray-700">{post.subline}</P>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={post.image.asset.url}
                            alt={post.title}
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Jetzt die reinen Strings als Absätze rendern */}
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <PT value={post.body} className="prose max-w-none mb-6" />
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticPaths() {
    const slugs = await client.fetch(`*[_type=="news" && defined(slug.current)]{"slug": slug.current}`);
    return { paths: slugs.map((s) => ({ params: { slug: s.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
    const postFetch = await client.fetch(
        `  *[_type=="news" && slug.current==$slug][0]{
    headline, subline, date,
    image{asset->{url, metadata{lqip}}, alt},
    body,
    seo
  
    }`,
        { slug: params.slug }
    );

    const post = await normalizePageWithHrefs(postFetch, client);

    return { props: { post } };
}
