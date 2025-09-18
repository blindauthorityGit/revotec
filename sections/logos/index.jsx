// components/LogoBar.jsx
import React from "react";
import Image from "next/image";

// Importiere alle Kunden-Logos aus assets/icons
import logoHagemeyer from "@/assets/icons/133578367693.png";
import logoHilti from "@/assets/icons/133578369034.png";
import logoKnauf from "@/assets/icons/133578374127.png";
import logoLafarge from "@/assets/icons/133578378463.png";
import logoPriorit from "@/assets/icons/133578382187.png";
import logoPromat from "@/assets/icons/133578384396.png";
import logoRaabKarcher from "@/assets/icons/133578395854.png";
import logoRigips from "@/assets/icons/133578397214.png";
import logoRueppel from "@/assets/icons/133578398322.png";
import logoUnielektro from "@/assets/icons/133578400929.png";
import logoWaibel from "@/assets/icons/133578402254.png";
import logoWuerth from "@/assets/icons/133578403296.png";
import logoXella from "@/assets/icons/133578404731.png";
import logoYtong from "@/assets/icons/133578408148.png";
import logoBeyeScheid from "@/assets/icons/133578421637.png";

const logos = [
    { src: logoHagemeyer, alt: "HAGEMEYER Deutschland" },
    { src: logoHilti, alt: "HILTI" },
    { src: logoKnauf, alt: "Knauf" },
    { src: logoLafarge, alt: "Lafarge" },
    { src: logoPriorit, alt: "PRIORIT" },
    { src: logoPromat, alt: "Promat" },
    { src: logoRaabKarcher, alt: "Raab Karcher" },
    { src: logoRigips, alt: "Rigips" },
    { src: logoRueppel, alt: "Rüppel Bauzentrum" },
    { src: logoUnielektro, alt: "Unielektro" },
    { src: logoWaibel, alt: "Waibel" },
    { src: logoWuerth, alt: "Würth" },
    { src: logoXella, alt: "Xella" },
    { src: logoYtong, alt: "Ytong" },
    { src: logoBeyeScheid, alt: "BeyeScheid" },
];

export default function LogoBar({ data }) {
    console.log(data);
    return (
        <div className="py-6 lg:py-12 bg">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center">
                    {data?.map((logo, idx) => (
                        <div key={idx} className="flex items-center justify-center bg-white p-4  ">
                            <Image
                                src={logo.url}
                                alt={logo.idx}
                                width={150}
                                height={60}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
