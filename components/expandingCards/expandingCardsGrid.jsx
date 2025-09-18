// components/ExpandingCardGrid.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import ExpandingCard from "./expandingCard";

export default function ExpandingCardGrid({ cards }) {
    const [activeIdx, setActiveIdx] = useState(0);

    const [isDesktop, setIsDesktop] = useState(false);

    // detect desktop for expansion logic
    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    console.log(cards);

    return (
        <LayoutGroup>
            <div className="flex flex-col lg:flex-row gap-4">
                {cards.map((c, i) => (
                    <ExpandingCard
                        key={i}
                        data={c}
                        isActive={activeIdx === i}
                        isDesktop={isDesktop}
                        onHoverStart={() => setActiveIdx(i)}
                    />
                ))}
            </div>
        </LayoutGroup>
    );
}
