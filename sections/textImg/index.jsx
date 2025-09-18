// components/TextImg.jsx
import clsx from "clsx";
import Link from "next/link";
import { H1, P } from "@/typography";
import { MainButton } from "@/components/buttons";
import useIsMobile from "@/hooks/isMobile";
import { PT } from "@/components/text";

const SPAN_CLASSES = {
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
    // …weitere falls benötigt
};

export default function TextImg({
    title,
    description,
    intro,
    bullets = [],
    buttonText,
    buttonLink = "#",
    children,
    order = false,
    bottomButton = false,
    leftSpan = 5, // hier nur noch Zahl übergeben
    rightSpan = 7,
    className = "",
}) {
    const isMobile = useIsMobile();

    return (
        <section className={clsx("py-16 lg:py-30", className)}>
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-12 lg:gap-8 items-start">
                {/* Linke Spalte */}
                <div
                    className={clsx(
                        "col-span-12", // immer 12 auf klein
                        SPAN_CLASSES[leftSpan], // md:col-span-X
                        "flex flex-col justify-center h-full space-y-6 lg:pr-24",
                        order && "lg:order-2"
                    )}
                >
                    <H1 klasse={clsx("mb-8 lg:mb-12", order && "mt-8")}>{title}</H1>
                    {description && <P klasse="mb-12 lg:mb-16">{description}</P>}

                    {intro && (
                        <div className="mb-6 text-base lg:text-lg leading-relaxed">
                            {" "}
                            <PT value={intro} className="prose max-w-none mb-6" />
                        </div>
                    )}

                    {bullets.length > 0 && (
                        <ul className="mb-8 list-disc list-inside font-semibold space-y-2 text-sm lg:text-base">
                            {bullets.map((b, idx) => (
                                <li key={idx}>{b}</li>
                            ))}
                        </ul>
                    )}

                    <MainButton
                        dark
                        aklass={clsx("w-full lg:block lg:w-auto", bottomButton && "hidden")}
                        link={buttonLink}
                    >
                        {buttonText}
                    </MainButton>
                </div>

                {/* Rechte Spalte */}
                <div className={clsx("col-span-12", SPAN_CLASSES[rightSpan], "flex", order && "lg:order-1")}>
                    {children}
                </div>

                {/* Optionaler Button ganz unten auf Mobile */}
                {bottomButton && isMobile && (
                    <div className="col-span-12 mt-8">
                        <MainButton dark aklass="w-full lg:w-auto" link={buttonLink}>
                            {buttonText}
                        </MainButton>
                    </div>
                )}
            </div>
        </section>
    );
}
