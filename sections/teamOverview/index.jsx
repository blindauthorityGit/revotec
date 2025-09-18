// sections/TeamSection.jsx
import React from "react";
import TeamMember from "@/components/team/member";

import Member1 from "@/assets/stefan-krauss.png";

const teamData = [
    {
        imageSrc: Member1.src,
        name: "Stefan Krauß",
        role: "Geschäftsführer",
        bio: "Leitet mit 15 Jahren Erfahrung unsere technischen Beratungsprojekte und sorgt für effiziente Abläufe.",
    },
    {
        imageSrc: Member1.src,
        name: "Kirill Shamov",
        role: "Leitung Projektmanagement",
        bio: "Koordiniert komplexe Bauvorhaben mit Fokus auf Termineinhaltung und Budgetkontrolle.",
    },
    {
        imageSrc: Member1.src,
        name: "Pooya Abootalebian",
        role: "ESG-Experte",
        bio: "Entwickelt nachhaltige ESG-Konzepte und begleitet Transformationsprojekte von A–Z.",
    },
    {
        imageSrc: Member1.src,
        name: "Tim Böhmer",
        role: "Architekt",
        bio: "Verbindet technische Planung mit kreativem Design für optimale Gebäudeergebnisse.",
    },
    {
        imageSrc: Member1.src,
        name: "Max v. Schorlemer",
        role: "Digitalisierung",
        bio: "Implementiert CAFM- und IoT-Lösungen zur Digitalisierung des Gebäudemanagements.",
    },
    {
        imageSrc: Member1.src,
        name: "Felicitas Galle",
        role: "Brandschutzspezialistin",
        bio: "Sichert mit Expertise in Sonderbaukontrollen und TDD Ihre Objekte gegen Risiken ab.",
    },
];

export default function TeamSection({ data }) {
    return (
        <section className="py-16 lg:py-30 bg-background-light text-darkGrey">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {data.map((member, i) => (
                        <TeamMember
                            key={i}
                            imageSrc={member.image.asset.url}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
