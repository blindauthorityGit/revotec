// pages/leistungen/[slug].jsx
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { services } from "@/data/services";
import SubPageHero from "@/sections/SubpageHero";
import { H2, H3, H4, P } from "@/typography";
import { CTAButton } from "@/components/buttons";
import CTASection from "@/sections/CTASection";

export async function getStaticPaths() {
    return {
        paths: services.map((s) => ({ params: { slug: s.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const service = services.find((s) => s.slug === params.slug);
    return { props: { service } };
}

export default function ServiceDetail({ service }) {
    const router = useRouter();
    if (router.isFallback) return <p>Loading…</p>;

    return (
        <>
            <Head>
                <title>{service.title} – Leistungen</title>
                <meta name="description" content={service.claim} />
            </Head>

            <SubPageHero title={service.title} subtitle={service.claim} bgImage={service.heroImage} />

            {/* Intro */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <P className="text-lg leading-relaxed whitespace-pre-wrap">{service.intro}</P>
                </div>
            </section>

            {/* Detaillierte Leistungen */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 space-y-12">
                    {service.details.map((d, idx) => (
                        <div key={idx} className="grid md:grid-cols-2 gap-8">
                            <div>
                                <H3 klasse="text-2xl mb-4">{d.title}</H3>
                                <P>{d.text}</P>
                            </div>
                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                {/* Optional: Bild-Platzhalter oder Icons */}
                                <Image src={service.heroImage} alt={d.title} fill style={{ objectFit: "cover" }} />
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
