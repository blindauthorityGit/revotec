// components/NewsSection.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { H1, H2, H3, P } from "@/typography";

import Card1 from "@/assets/card1.png";
import Card2 from "@/assets/card2.png";
import Card3 from "@/assets/card3.png";

// Beispiel-Beiträge zur Veranschaulichung
const samplePosts = [
    {
        id: 1,
        title: "Innovative Lösungen für energetische Sanierung",
        excerpt:
            "Erfahren Sie, wie wir mit modernsten Methoden Gebäude effizienter gestalten und Energiekosten senken.",
        image: Card1.src,
        href: "/blog/energetische-sanierung",
    },
    {
        id: 2,
        title: "Digitalisierung im Facility Management",
        excerpt: "Von der CAFM-Integration bis zur Echtzeit-Überwachung – wir zeigen Best Practices für Ihren Erfolg.",
        image: Card2.src,
        href: "/blog/facility-management-digital",
    },
    {
        id: 3,
        title: "ESG-Kriterien im Bauprojekt",
        excerpt: "Wie Nachhaltigkeits-Standards Ihre Projekte zukunftssicher machen und Investoren überzeugen.",
        image: Card3.src,
        href: "/blog/esg-im-bau",
    },
    {
        id: 4,
        title: "Brandschutz: Neue Vorschriften 2025",
        excerpt: "Alle Fakten zu den aktuellen Änderungen im Brandschutzrecht und worauf Planer achten müssen.",
        image: Card1.src,
        href: "/blog/brandschutz-2025",
    },
    {
        id: 5,
        title: "Nachhaltige Materialwahl im Bauwesen",
        excerpt: "Vergleich umweltfreundlicher Baustoffe und deren Einsatzmöglichkeiten in modernen Projekten.",
        image: Card2.src,
        href: "/blog/nachhaltige-materialwahl",
    },
];

export default function NewsSection({ posts = samplePosts }) {
    // Nur die letzten vier Beiträge anzeigen
    const latest = posts.slice(0, 4);
    if (latest.length === 0) return null;

    return (
        <section className="py-16 lg:py-30 ">
            <div className="container mx-auto px-6 md:px-12">
                <H1 klasse="mb-12 ">Neues und Wissenswertes</H1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {latest.map((post) => (
                        <article key={post.id} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative h-48 lg:h-64">
                                <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <H3 klasse="font-semibold mb-6">{post.title}</H3>
                                <P className="mb-8">{post.excerpt}</P>
                                <Link
                                    href={post.href}
                                    className="mt-auto  inline-flex items-center text-primaryColor-500 font-semibold"
                                >
                                    <Play className="w-4 h-4 mr-2 " />
                                    mehr
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="bg-primaryColor-500 hover:bg-primaryColor-600 text-white font-semibold py-3 px-8 rounded-md"
                    >
                        mehr erfahren
                    </Link>
                </div>
            </div>
        </section>
    );
}
