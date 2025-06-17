// data/news.js
import News1 from "@/assets/history.png";
import News2 from "@/assets/history.png";
import News3 from "@/assets/history.png";

export const news = [
    {
        slug: "digitalisierung-im-gebaeudebetrieb",
        title: "Digitalisierung im Gebäudebetrieb: Unsere neuen CAFM-Integrationen",
        date: "2025-06-10",
        excerpt:
            "Wir haben die Anbindung an führende CAFM-Systeme weiter ausgebaut und ermöglichen jetzt nahtlose SAP-Connectivity für Bestandsimmobilien.",
        image: News1.src,
        // statt JSX: ein Array von reinen Strings
        content: [
            "Im Rahmen unseres fortlaufenden Technologie-Advances haben wir die CAFM-Integrationen um SAP-Connect erweitert. Das bedeutet für unsere Kunden: Echtzeit-Datenabgleich, weniger manuelle Schnittstellen und deutlich geringere Fehlerquoten in der Facility-Dokumentation.",
            "Unsere Technikteams haben erfolgreich mehrere Pilotprojekte abgeschlossen – von Industrie-Logistik-Objekten bis zu großen Bürokomplexen. Die Ergebnisse: bis zu 30 % weniger Aufwände bei Wartung und Instandhaltung.",
        ],
    },
    {
        slug: "esg-report-2025-veroeffentlicht",
        title: "ESG-Report 2025 veröffentlicht: Trends und Insights",
        date: "2025-05-02",
        excerpt:
            "Unser jährlicher ESG-Report ist da: Fokus auf Energieeffizienz, CO₂-Bilanzierung und nachhaltige Sanierungsfahrpläne.",
        image: News2.src,
        content: [
            "Im aktuellen ESG-Report beleuchten wir die Entwicklungen im Gebäudesektor: von digitaler Energieüberwachung bis hin zu innovativen Sanierungsmaterialien. Besonders spannend: die Fallstudie eines 20 000 m²-Logistikzentrums, das seinen CO₂-Fußabdruck um 40 % reduzierte.",
            "Außerdem geben wir einen Ausblick auf kommende Regularien und zeigen, wie bereits heute zukunftsfähige Maßnahmen umgesetzt werden können – von PV-Dächern bis zu grünen Infrastrukturkonzepten.",
        ],
    },
    {
        slug: "neuer-standort-hamburg-eroeffnet",
        title: "Neuer Standort Hamburg eröffnet",
        date: "2025-04-15",
        excerpt:
            "Wir sind gewachsen! Mit unserem neuen Büro in Hamburg-Altona bieten wir Kunden im Norden noch besseren Support vor Ort.",
        image: News3.src,
        content: [
            "Zum 1. April 2025 haben wir offiziell unseren neuen Standort in Hamburg-Altona eröffnet. Auf über 300 m² unterstützen wir nun unsere norddeutschen Kunden direkt vor Ort – von der technischen Beratung bis zum schlüsselfertigen Projektmanagement.",
            "Die Räumlichkeiten sind mit modernster Equipment ausgestattet, inkl. 3D-Laserscanner, CAD-Arbeitsplätze und Social-Lounge für Workshops und Kundenevents. Wir freuen uns auf Sie!",
        ],
    },
];
