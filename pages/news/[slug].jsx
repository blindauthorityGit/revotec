// pages/news/[slug].jsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/data/news";
import { P, H2 } from "@/typography";

export async function getStaticPaths() {
    const paths = news.map((n) => ({ params: { slug: n.slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const item = news.find((n) => n.slug === params.slug);
    return { props: { item } };
}

export default function NewsDetail({ item }) {
    return (
        <>
            <Head>
                <title>{item.title} – News</title>
                <meta name="description" content={item.excerpt} />
            </Head>

            <section className="py-16 lg:py-30 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 space-y-8">
                    <Link href="/news" passHref>
                        <div className="text-sm text-gray-500 hover:underline">&larr; Zurück zu News</div>
                    </Link>

                    <div className="space-y-4 text-center">
                        <div className="text-sm text-gray-500">{item.date}</div>
                        <H2 klasse="text-3xl lg:text-4xl font-bold">{item.title}</H2>
                        <P klasse="max-w-2xl mx-auto text-gray-700">{item.excerpt}</P>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Jetzt die reinen Strings als Absätze rendern */}
                    <div className="prose prose-lg max-w-none text-gray-700">
                        {item.content.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
