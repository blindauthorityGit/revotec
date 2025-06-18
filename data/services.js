// data/services.js
import BeratungImg from "@/assets/history.png";
import ProjektImg from "@/assets/history.png";
import ESGImg from "@/assets/history.png";

export const services = [
    {
        slug: "technische-beratung",
        title: "Technische Beratung",
        claim: "Exakte Analysen für einen sicheren, effizienten Gebäudebetrieb",
        heroImage: BeratungImg.src,
        intro: `
      Von der technischen Bestandsaufnahme Ihrer Immobilie bis zur Integration aller Daten in Ihr CAFM-System – 
      unsere technische Beratung stellt sicher, dass Ihr Gebäudebetrieb effizient, sicher und rechtskonform läuft.
    `,
        details: [
            {
                title: "Technische Gebäudeaufnahme für die FM-Betreuung",
                text: "Wir erfassen den technischen Ist-Zustand Ihres Gebäudes umfassend und detailliert. Diese Dokumentation bildet die Grundlage für eine effiziente FM-Betreuung.",
            },
            {
                title: "Anlagenimplementierung in CAFM-Systeme inkl. SAP-Connect",
                text: "Wir pflegen alle Anlagendaten in Ihr CAFM-System ein und richten eine nahtlose Schnittstelle  zu SAP ein, damit Wartungs- und Betriebsdaten zentral verfügbar sind.",
            },
            {
                title: "Bauherrenbegleitung bei Brandschauen & Sonderbaukontrollen",
                text: "Wir vertreten Ihre Interessen vor Ort, identifizieren Mängel und sorgen dafür, dass behördliche Auflagen schnell und fundiert umgesetzt werden.",
            },
            {
                title: "Überprüfung & Aktualisierung von Brandschutzvorgaben",
                text: "Wir prüfen Ihre bestehenden Brandschutzkonzepte, aktualisieren sie auf den neuesten Stand und minimieren so Risiken und Haftung.",
            },
            {
                title: "Technische Due Diligence (TDD)",
                text: "Im Rahmen von An-/Verkaufstransaktionen begutachten wir alle technischen Anlagen und liefern Ihnen eine belastbare Entscheidungsgrundlage.",
            },
        ],
        benefits: [
            "Optimierte Prozesse & transparente Dokumentation",
            "Rechtssicherheit durch vollständige Protokolle",
            "Langfristige Kostenersparnis durch vorausschauende Wartung",
            "Nahtlose Datenintegration über SAP-Connect",
        ],
        examples: [
            {
                title: "Bürokomplex München",
                text: "Komplette CAFM-Anbindung und SAP-Connect für einen 20.000 m² Campus.",
            },
            {
                title: "Logistikzentrum Hamburg",
                text: "Brandschutz-Optimierung und Modernisierungskonzept für eine 50.000 m² Hallenfläche.",
            },
            {
                title: "Einkaufszentrum Berlin",
                text: "Technische Due Diligence im Vorfeld einer Verkaufsverhandlung.",
            },
        ],
        cta: {
            text: "Jetzt Beratung anfragen",
            link: "/kontakt",
        },
    },

    {
        slug: "bauprojektmanagement",
        title: "Bauprojektmanagement",
        claim: "Ganzheitliche Steuerung von Neubau bis Bestandssanierung",
        heroImage: ProjektImg.src,
        intro: `
      Von der Projektvorbereitung über HOAI-LP5 bis zum schlüsselfertigen Abschluss: 
      Wir koordinieren alle Gewerke, überwachen Kosten & Termine und liefern Ihre Bauvorhaben termingerecht ab.
    `,
        details: [
            {
                title: "Projektsteuerung & Kostencontrolling",
                text: "Wir übernehmen Planung, Budget-Monitoring und Risikomanagement entlang des gesamten Bauzyklus.",
            },
            {
                title: "HOAI-Bauleitung ab LP5",
                text: "Fachkundige Bauleitung und Dokumentation gemäß HOAI-Leistungsphasen 5–8.",
            },
            {
                title: "Mängelmanagement & Abnahme",
                text: "Wir begleiten Sie bei der Beseitigung von Baumängeln und koordinierten Abnahmen.",
            },
            {
                title: "Plausibilitätsprüfungen",
                text: "Kontinuierliche Qualitäts- und Fortschrittskontrollen sichern den Projekterfolg.",
            },
        ],
        benefits: [
            "Transparente Kosten- & Terminplanung",
            "Ein Ansprechpartner für alle Gewerke",
            "Früherkennung von Risiken & Verzögerungen",
            "Maximale Termintreue",
        ],
        examples: [
            {
                title: "Wohnquartier München",
                text: "120 Wohneinheiten, LP5–8, Mängelbeseitigung & Schlüsselübergabe.",
            },
            {
                title: "Schulgebäude Stuttgart",
                text: "Brandschutz-Nachrüstung in denkmalgeschützter Immobilie.",
            },
            {
                title: "Hotel-Neubau Frankfurt",
                text: "200 Zimmer, Claim- & Change-Management inklusive.",
            },
        ],
        cta: {
            text: "Projekt besprechen",
            link: "/kontakt",
        },
    },

    {
        slug: "esg-transformation",
        title: "ESG-Transformation",
        claim: "Ihre Immobilie ganzheitlich klima- und zukunftsfähig machen",
        heroImage: ESGImg.src,
        intro: `
      Wir erstellen Sanierungsfahrpläne, bewerten Restnutzungsdauern und entwickeln maßgeschneiderte Konzepte 
      zur CO₂-Reduktion und digitalen Zukunftsfähigkeit.
    `,
        details: [
            {
                title: "Gebäudetechnische Bestandsaufnahme",
                text: "Erfassung sämtlicher technischer Anlagen und energetischer Kennwerte.",
            },
            {
                title: "Restnutzungs- & Lebenszyklusanalyse",
                text: "Wir bestimmen die Restlebensdauer von Bauteilen und leiten Sanierungsbedarf ab.",
            },
            {
                title: "Sanierungsfahrpläne",
                text: "Detaillierte Zeit- und Budgetpläne für eine schrittweise Modernisierung.",
            },
            {
                title: "Individuelle Transformationskonzepte",
                text: "Konzepte für CO₂-Reduktion, erneuerbare Energien und ESG-Berichterstattung.",
            },
        ],
        benefits: [
            "Klarer Fahrplan für Sanierung & Modernisierung",
            "Nachweisbare CO₂-Einsparungen",
            "Fördermittel-Optimierung",
            "Stärkung Ihres Nachhaltigkeits-Profils",
        ],
        examples: [
            {
                title: "Logistikzentrum Frankfurt",
                text: "PV-Simulationen & CO₂-Fußabdruck-Berechnung nach GHG-Protocol.",
            },
            {
                title: "Verwaltungsgebäude Köln",
                text: "Sanierungsfahrplan & LCA-Bericht für städtisches Amtshaus.",
            },
            {
                title: "Industriecampus Dresden",
                text: "Energetische Bestandsaufnahme & Transformationsroadmap.",
            },
        ],
        cta: {
            text: "ESG-Check anfragen",
            link: "/kontakt",
        },
    },
];
