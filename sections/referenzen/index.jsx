// sections/referenzen/ReferencesSlider.jsx
import React, { useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReferenceCard from "./referenceCard";
// import { GeneralNavButton } from "@/components/buttons";
import { H1, H2, P } from "@/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";

import useIsMobile from "@/hooks/isMobile"; // <— Hook, den Du schon hast

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReferencesSlider({ items = [], headline = "Unsere Referenzen" }) {
    // start with the first always “hovered”
    const [activeIdx, setActiveIdx] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const isMobile = useIsMobile();

    return (
        <section className="py-16 lg:py-30 bg-background-dark text-white">
            <div className="container mx-auto px-6 md:px-12 space-y-8 relative">
                {/* heading */}
                <H1 klasse="mb-12">{headline}</H1>

                <P klasse="mb-16">Eine Übersicht unserer abgeschlossenen Projekte</P>

                {/* slider */}
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    loop={false}
                    autoHeight
                    slidesPerView={1.3}
                    spaceBetween={8}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1.5, spaceBetween: 12 },
                        768: { slidesPerView: 2, spaceBetween: 16 },
                        1024: { slidesPerView: 3.3, spaceBetween: 20 },
                    }}
                    className="w-full"
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => {
                        // setze activeIdx beim Swipe
                        setActiveIdx(swiper.activeIndex);
                    }}
                >
                    {items.map((item, idx) => (
                        <SwiperSlide key={idx} className="overflow-visible">
                            <ReferenceCard
                                {...item}
                                isActive={activeIdx === idx}
                                onHoverStart={() => !isMobile && setActiveIdx(idx)}
                                isMobile={isMobile}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* custom nav */}
                <button
                    onClick={() => swiperInstance?.slidePrev()}
                    className="refs-prev hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 z-10"
                >
                    <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                    onClick={() => swiperInstance?.slideNext()}
                    className="refs-next hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 z-10"
                >
                    <ChevronRight className="h-6 w-6 text-white" />
                </button>
            </div>
        </section>
    );
}
