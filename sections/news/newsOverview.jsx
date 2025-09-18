// components/NewsOverview.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { P, H2 } from "@/typography";
import { news } from "@/data/news";

export default function NewsOverview({ data }) {
    console.log(data);
    return (
        <section className="py-16 lg:py-30 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 space-y-8">
                {/* Intro */}

                {/* Karten */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((item) => (
                        <motion.article
                            key={item.slug}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
                            whileHover={{ scale: 1.02, y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            {/* Bild */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={item.image.asset.url}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            {/* Text */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                                <h3 className="text-lg font-semibold mb-3">{item.headline}</h3>
                                <P klasse="flex-1 text-gray-700 mb-4">{item.subline}</P>
                                <Link href={`/news/${item.slug.current}`} passHref>
                                    <div className="mt-auto inline-block text-primaryColor-500 font-medium hover:underline">
                                        Weiterlesen →
                                    </div>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
