// sections/RichTextImageSection.jsx
import React from "react";
import Image from "next/image";
import { H1, P } from "@/typography";

/**
 * Props:
 * - title: string | ReactNode
 * - topContent: ReactNode
 * - topImage: { src: string, alt?: string }
 * - bottomContent: ReactNode
 * - bottomImage: { src: string, alt?: string }
 * - className?: string
 */
export default function RichTextImageSection({
    title,
    topContent,
    topImage,
    bottomContent,
    bottomImage,
    className = "",
}) {
    return (
        <section className={`py-20 bg-gray-50 ${className}`}>
            <div className="container mx-auto px-6 md:px-12 space-y-16">
                {/* Überschrift */}
                {title && (
                    <div>
                        <H1 klasse="text-4xl lg:text-5xl mb-12">{title}</H1>
                    </div>
                )}

                {/* Obere Reihe: Text links, Bild rechts */}
                <div className="grid grid-cols-12 lg:gap-16 items-stretch ">
                    {/* Text-Block */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-6">
                        {typeof topContent === "string" ? <P>{topContent}</P> : topContent}
                    </div>
                    {/* Bild-Block */}
                    <div className="col-span-12 lg:col-span-6 flex">
                        <div className="relative w-full h-full  overflow-hidden ">
                            <Image src={topImage.src} alt={topImage.alt || ""} fill style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>

                {/* Untere Reihe: Bild links, Text rechts */}
                <div className="grid grid-cols-12 lg:gap-16 items-stretch">
                    {/* Bild-Block */}
                    <div className="col-span-12 lg:col-span-6 flex">
                        <div className="relative w-full h-full  overflow-hidden ">
                            <Image
                                src={bottomImage.src}
                                alt={bottomImage.alt || ""}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                    {/* Text-Block */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-6">
                        {typeof bottomContent === "string" ? <P>{bottomContent}</P> : bottomContent}
                    </div>
                </div>
            </div>
        </section>
    );
}
