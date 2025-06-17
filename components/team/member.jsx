// components/TeamMember.jsx
import React from "react";
import Image from "next/image";
import { P } from "@/typography";

export default function TeamMember({ imageSrc, name, role, bio }) {
    return (
        <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-48 h-64  overflow-hidden ">
                <Image src={imageSrc} alt={name} width={200} height={120} className="object-cover" />
            </div>
            <h3 className="text-2xl font-bold">{name}</h3>
            {role && <p className="text-sm text-primaryColor-500">{role}</p>}
            {bio && <P klasse="text-sm opacity-80">{bio}</P>}
        </div>
    );
}
