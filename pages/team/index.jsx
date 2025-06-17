// pages/leistungen.jsx
import Head from "next/head";
import Image from "next/image";
import SubPageHero from "@/sections/SubpageHero";
import TeamSection from "@/sections/teamOverview";
import CTASection from "@/sections/CTASection";
import ReferencesSlider from "@/sections/referenzen";
import Logos from "@/sections/logos";
import ContactOverview from "@/sections/contactOverview";
import RichTextImageSection from "@/sections/textImg/richTextImageSection";
import { P } from "@/typography";
import Card1 from "@/assets/card1.png";
import History from "@/assets/history.png";
import HeroTeam from "@/assets/heroTeam.png";

export default function Team() {
    return (
        <>
            <Head>
                <title>Team – Revotec GmbH</title>
                <meta
                    name="description"
                    content="Unsere Leistungen in technischer Beratung, Projektmanagement & ESG-Transformation"
                />
            </Head>

            {/* Subpage-Hero */}
            <SubPageHero
                title={
                    <>
                        Kompetenz, <span className="text-primaryColor-500">Erfahrung und Leidenschaft</span> für
                        zukunftssichere Immobilien
                    </>
                }
                subtitle="Ein Team aus Spezialist:innen, das Technik, Nachhaltigkeit und Projektmanagement vereint – für Lösungen, die wirken."
                ctaText="Kontakt aufnehmen"
                ctaLink="/kontakt"
                bgImage={HeroTeam.src}
                bgGradientFrom="rgba(0,0,0,0.6)"
                bgGradientTo="transparent"
            />

            {/* Mapping aller Services mit ServiceSection */}
            {/* {services.map((svc, i) => (
                <ServiceSection
                    key={i}
                    title={svc.title}
                    intro={svc.intro}
                    bullets={svc.bullets}
                    imageSrc={svc.imageSrc}
                    buttonText={svc.buttonText}
                    buttonLink={svc.buttonLink}
                    reverse={i % 2 === 1}
                />
            ))} */}
            <TeamSection />
            <RichTextImageSection
                title="Wie alles begann"
                topContent={
                    <>
                        <P>
                            Die Idee zur Unternehmensgründung entstand aus der Praxis heraus. Als erfahrene Fachleute
                            aus dem technischen Gebäudemanagement erkannten wir immer wieder dieselben Herausforderungen
                            bei Bauherren, Eigentümern und Betreibern: fehlende Transparenz, unklare Zuständigkeiten und
                            ungenutzte Potenziale – sowohl im laufenden Betrieb als auch bei Sanierung oder Verkauf.
                            Daraus entstand unser Anspruch: Prozesse verständlicher, Gebäude effizienter und Projekte
                            erfolgreicher zu machen.
                        </P>
                        <P>
                            Was zunächst mit technischer Beratung und punktueller Unterstützung begann, entwickelte sich
                            schnell zu einem umfassenden Leistungsspektrum. Unsere Kunden wünschten sich nicht nur
                            Expertise bei der Gebäudeaufnahme oder der Brandschutzprüfung, sondern eine durchgängige
                            Begleitung – von der Planung über die Umsetzung bis zum laufenden Betrieb. Diesen Weg sind
                            wir konsequent gegangen.
                        </P>
                        <P>
                            Mit jeder neuen Projektanfrage wuchs unser Know-how – und unser Team. Durch gezielten Ausbau
                            unserer Kompetenzen im Projektmanagement konnten wir die gesamte technische und operative
                            Verantwortung übernehmen, insbesondere ab Leistungsphase 5 nach HOAI. Heute begleiten wir
                            Bauprojekte in ganz Deutschland – ob Neubau, Bestand oder Sanierung.
                        </P>
                        <P>
                            Ein Meilenstein war die Integration von digitalen Tools zur Anlagenverwaltung und zur
                            Steuerung technischer Gebäudeprozesse. Gerade im Bereich CAFM (Computer-Aided Facility
                            Management) und SAP-Anbindung konnten wir früh Standards setzen, die unseren Kunden den
                            Arbeitsalltag deutlich erleichtern. Unsere technische DNA war damit nicht nur erhalten,
                            sondern konsequent weitergedacht.{" "}
                        </P>
                    </>
                }
                topImage={{ src: History.src, alt: "Baustelle im Abendlicht" }}
                bottomContent={
                    <>
                        <P>
                            Die nächsten logischen Schritte führten uns in den Bereich Nachhaltigkeit und ESG. Denn
                            nachhaltiges Bauen und Betreiben ist kein Trend, sondern eine wirtschaftliche und
                            regulatorische Notwendigkeit. Wir begannen damit, Sanierungsfahrpläne zu entwickeln,
                            Zustände zu bewerten und Gebäude systematisch ESG-fit zu machen.
                        </P>
                        <P>
                            Auch in diesem Bereich bauen wir unser Wissen kontinuierlich aus – interdisziplinär,
                            datenbasiert und pragmatisch. Heute vereinen wir Technik, Organisation und strategische
                            Planung unter einem Dach. Unsere Arbeitsweise ist klar strukturiert, aber immer
                            anpassungsfähig – denn jedes Projekt bringt neue Anforderungen mit sich. Unsere Kunden
                            schätzen nicht nur unsere Fachkenntnis, sondern auch unsere Verlässlichkeit, die direkte
                            Kommunikation und unsere Fähigkeit, in Lösungen zu denken.
                        </P>
                        <P>
                            Unser Team besteht aus Menschen, die nicht nur in Zahlen und Plänen denken, sondern auch in
                            Wirkungen und Zusammenhängen. Wir glauben daran, dass die Qualität unserer Arbeit nicht nur
                            messbar, sondern auch spürbar sein muss – für Eigentümer, Betreiber, Nutzer und Investoren
                            gleichermaßen.
                        </P>
                        <P>
                            Und wir entwickeln uns weiter. Mit jedem neuen Projekt, jeder neuen Herausforderung und
                            jedem neuen Kunden. Denn für uns ist jedes Gebäude eine Chance, Zukunft mitzugestalten –
                            nachhaltig, wirtschaftlich und auf Augenhöhe.
                        </P>
                    </>
                }
                bottomImage={{ src: History.src, alt: "Moderne Gebäude von oben" }}
            />
            <CTASection />
            <Logos></Logos>
            <ContactOverview gradientFrom="rgba(245,130,31,0.15)" gradientTo="transparent"></ContactOverview>
        </>
    );
}
