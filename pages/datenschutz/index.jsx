// pages/datenschutz.jsx
import Head from "next/head";
import { H1, H2, P } from "@/typography";

export default function DatenschutzPage() {
    return (
        <>
            <Head>
                <title>Datenschutzerklärung – Stand: 18. Juni 2025</title>
                <meta name="description" content="Datenschutzerklärung der Revotec GmbH – Stand: 18. Juni 2025" />
            </Head>

            <section className="py-16 lg:py-30 bg-background-dark text-gray-50">
                <div className="container mx-auto px-6 md:px-12 space-y-8">
                    {/* Titel & Datum */}
                    <div className="space-y-2">
                        <H1 klasse="text-4xl lg:text-5xl">Datenschutzerklärung</H1>
                        <P>Stand: 18. Juni 2025</P>
                    </div>

                    {/* Inhaltsverzeichnis */}
                    <div>
                        <H2 klasse="text-2xl mb-4">Inhaltsübersicht</H2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m3">
                                    Verantwortlicher
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#mOverview">
                                    Übersicht der Verarbeitungen
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m2427">
                                    Maßgebliche Rechtsgrundlagen
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m27">
                                    Sicherheitsmaßnahmen
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m25">
                                    Übermittlung von personenbezogenen Daten
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m24">
                                    Internationale Datentransfers
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m12">
                                    Allgemeine Informationen zur Datenspeicherung und Löschung
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m10">
                                    Rechte der betroffenen Personen
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m225">
                                    Bereitstellung des Onlineangebotes und Webhosting
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m134">
                                    Einsatz von Cookies
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m104">
                                    Blogs und Publikationsmedien
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m182">
                                    Kontakt- und Anfrageverwaltung
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m263">
                                    Webanalyse, Monitoring und Optimierung
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m136">
                                    Präsenzen in sozialen Netzwerken (Social Media)
                                </a>
                            </li>
                            <li>
                                <a className="text-primaryColor-500 hover:underline" href="#m328">
                                    Plug-ins und eingebettete Inhalte
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Verantwortlicher */}
                    <div id="m3" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Verantwortlicher</H2>
                        <P>
                            Max Mustermann,
                            <br />
                            Mustertraße 1<br />
                            60000 Musterstadt
                            <br />
                            E-Mail:{" "}
                            <a href="mailto:info@revotec-gmbh.de" className="text-primaryColor-500 hover:underline">
                                info@revotec-gmbh.de
                            </a>
                        </P>
                    </div>

                    {/* Übersicht der Verarbeitungen */}
                    <div id="mOverview" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Übersicht der Verarbeitungen</H2>
                        <P>
                            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer
                            Verarbeitung zusammen und verweist auf die betroffenen Personen.
                        </P>

                        <H2 klasse="text-xl mt-4 mb-2">Arten der verarbeiteten Daten</H2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Bestandsdaten</li>
                            <li>Kontaktdaten</li>
                            <li>Inhaltsdaten</li>
                            <li>Nutzungsdaten</li>
                            <li>Meta-, Kommunikations- und Verfahrensdaten</li>
                            <li>Protokolldaten</li>
                        </ul>

                        <H2 klasse="text-xl mt-4 mb-2">Kategorien betroffener Personen</H2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Kommunikationspartner</li>
                            <li>Nutzer</li>
                        </ul>

                        <H2 klasse="text-xl mt-4 mb-2">Zwecke der Verarbeitung</H2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Kommunikation</li>
                            <li>Sicherheitsmaßnahmen</li>
                            <li>Reichweitenmessung</li>
                            <li>Organisations- und Verwaltungsverfahren</li>
                            <li>Feedback</li>
                            <li>Profile mit nutzerbezogenen Informationen</li>
                            <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
                            <li>Informationstechnische Infrastruktur</li>
                            <li>Öffentlichkeitsarbeit</li>
                        </ul>
                    </div>

                    {/* Rechtsgrundlagen */}
                    <div id="m2427" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Maßgebliche Rechtsgrundlagen</H2>
                        <P>
                            <strong>DSGVO:</strong> Übersicht der Art. 6 Abs. 1 DSGVO:
                        </P>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)</strong> – Sie haben Ihre Einwilligung
                                zur Verarbeitung Ihrer Daten für einen bestimmten Zweck gegeben.
                            </li>
                            <li>
                                <strong>Vertragserfüllung & Vorvertragliches (Art. 6 Abs. 1 S. 1 lit. b)</strong> –
                                Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen.
                            </li>
                            <li>
                                <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)</strong> – Verarbeitung zur
                                Wahrung unserer berechtigten Interessen, sofern Ihre Rechte nicht überwiegen.
                            </li>
                        </ul>

                        <P className="mt-4">
                            <strong>Deutschland (BDSG):</strong> Ergänzend zu DSGVO gelten nationale Regelungen (z. B.
                            BDSG mit Spezialregelungen etwa zu Auskunft, Löschung, Widerspruch, besonderen Kategorien
                            personenbezogener Daten, automatisierten Entscheidungen/Profiling).
                        </P>

                        <P className="mt-4">
                            <strong>Schweiz (DSG):</strong> Diese Hinweise gelten auch nach Schweizer DSG; aus
                            Konsistenz verwenden wir die DSGVO-Terminologie, behalten aber die Geltung nach Schweizer
                            Recht bei.
                        </P>
                    </div>

                    {/* Sicherheitsmaßnahmen */}
                    <div id="m27" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Sicherheitsmaßnahmen</H2>
                        <P>
                            Wir treffen technische und organisatorische Maßnahmen nach dem Stand der Technik, um
                            Vertraulichkeit, Integrität und Verfügbarkeit Ihrer Daten sicherzustellen. Dazu zählen
                            Zugangskontrollen, Protokollierung, Pseudonymisierung und datenschutzfreundliche
                            Voreinstellungen.
                        </P>
                    </div>

                    {/* Übermittlung */}
                    <div id="m25" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Übermittlung von personenbezogenen Daten</H2>
                        <P>
                            Daten werden nur an Erfüllungsgehilfen oder Dienstleister weitergegeben, soweit es für die
                            Vertragserfüllung oder technisch notwendig ist. Wir schließen mit allen Dritten
                            Auftragsverarbeitungsverträge (AVV).
                        </P>
                    </div>

                    {/* Internationale Transfers */}
                    <div id="m24" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Internationale Datentransfers</H2>
                        <P>
                            Datenübermittlungen in Drittländer (z. B. USA) erfolgen auf Basis des EU-US Data Privacy
                            Framework und/oder Standardvertragsklauseln. Weitere Infos unter{" "}
                            <a
                                href="https://www.dataprivacyframework.gov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primaryColor-500 hover:underline"
                            >
                                dataprivacyframework.gov
                            </a>{" "}
                            bzw.{" "}
                            <a
                                href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primaryColor-500 hover:underline"
                            >
                                europa.eu/datenschutz/international
                            </a>
                            .
                        </P>
                    </div>

                    {/* Allgemeines zur Speicherung */}
                    <div id="m12" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Allgemeine Informationen zur Datenspeicherung und Löschung</H2>
                        <P>
                            Wir löschen Daten, sobald Einwilligungen widerrufen wurden oder keine rechtliche Grundlage
                            mehr besteht. Ausnahmen gelten für handels- und steuerrechtliche Aufbewahrungspflichten (bis
                            zu 10 Jahre) oder zur Rechtsverfolgung (Verjährung).
                        </P>
                    </div>

                    {/* Rechte der Betroffenen */}
                    <div id="m10" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Rechte der betroffenen Personen</H2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <strong>Auskunft</strong> (Art. 15 DSGVO)
                            </li>
                            <li>
                                <strong>Berichtigung</strong> (Art. 16 DSGVO)
                            </li>
                            <li>
                                <strong>Löschung/Einschränkung</strong> (Art. 17/18 DSGVO)
                            </li>
                            <li>
                                <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
                            </li>
                            <li>
                                <strong>Widerspruch</strong> (Art. 21 DSGVO)
                            </li>
                            <li>
                                <strong>Beschwerde</strong> bei der Aufsichtsbehörde
                            </li>
                            <li>
                                <strong>Widerruf von Einwilligungen</strong> jederzeit möglich
                            </li>
                        </ul>
                    </div>

                    {/* Bereitstellung des Onlineangebotes und Webhosting */}
                    <div id="m225" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Bereitstellung des Onlineangebots und Webhosting</H2>
                        <P>
                            Wir verarbeiten die Daten der Nutzer, um unsere Online-Dienste bereitstellen zu können.
                            Hierzu gehört insbesondere die Erfassung der IP-Adresse, um Inhalte an Browser oder Endgerät
                            zu übermitteln.
                        </P>
                        <ul className="list-disc list-inside space-y-1 mt-4">
                            <li>
                                <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (Seitenaufrufe, Klickpfade),
                                Meta- und Kommunikationsdaten (IP-Adresse, Zeitangaben), Protokolldaten (Logfiles).
                            </li>
                            <li>
                                <strong>Betroffene Personen:</strong> Webseitenbesucher, Nutzer unserer Onlinedienste.
                            </li>
                            <li>
                                <strong>Zwecke:</strong> Betrieb der Website, Performance-Monitoring,
                                Sicherheitsmaßnahmen.
                            </li>
                            <li>
                                <strong>Aufbewahrung:</strong> Siehe Abschnitt “Allgemeine Informationen zur
                                Datenspeicherung”.
                            </li>
                            <li>
                                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                            </li>
                        </ul>
                    </div>

                    {/* Einsatz von Cookies */}
                    <div id="m134" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Einsatz von Cookies</H2>
                        <P>
                            Cookies sind kleine Dateien, die auf Ihrem Endgerät gespeichert werden und uns helfen,
                            unsere Website nutzerfreundlicher zu gestalten und zu analysieren.
                        </P>
                        <ul className="list-disc list-inside space-y-1 mt-4">
                            <li>
                                <strong>Session-Cookies:</strong> Werden gelöscht, wenn Sie den Browser schließen.
                            </li>
                            <li>
                                <strong>Permanente Cookies:</strong> Bleiben bis zum Ablauf einer definierten Dauer
                                gespeichert (bis zu 2 Jahre).
                            </li>
                        </ul>
                        <P className="mt-4">
                            Sofern erforderlich, holen wir Ihre Einwilligung vorab ein (Art. 6 Abs. 1 lit. a DSGVO).
                            Ohne Einwilligung stützen wir uns auf berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO),
                            wenn Cookies notwendig sind, um eine angeforderte Funktion bereitzustellen.
                        </P>
                    </div>

                    {/* Blogs und Publikationsmedien */}
                    <div id="m104" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Blogs und Publikationsmedien</H2>
                        <P>
                            Wir betreiben Blogs und andere Online-Publikationskanäle. Kommentare und Beiträge können
                            IP-Adressen gespeichert werden, um Missbrauch vorzubeugen.
                        </P>
                        <ul className="list-disc list-inside space-y-1 mt-4">
                            <li>
                                <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (Kommentare), Bestands- und
                                Kontaktdaten.
                            </li>
                            <li>
                                <strong>Betroffene Personen:</strong> Leser, Kommentatoren.
                            </li>
                            <li>
                                <strong>Zwecke:</strong> Interaktion, Feedback, Community-Aufbau.
                            </li>
                            <li>
                                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                            </li>
                        </ul>
                    </div>

                    {/* Kontakt- und Anfrageverwaltung */}
                    <div id="m182" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Kontakt- und Anfrageverwaltung</H2>
                        <P>
                            Bei Kontaktanfragen (z. B. über E-Mail, Telefon, Kontaktformular) verarbeiten wir Ihre
                            Angaben zur Beantwortung und Dokumentation.
                        </P>
                        <ul className="list-disc list-inside space-y-1 mt-4">
                            <li>
                                <strong>Verarbeitete Datenarten:</strong> Name, Kontaktdaten, Nachrichtentext.
                            </li>
                            <li>
                                <strong>Betroffene Personen:</strong> Antragsteller, Interessenten.
                            </li>
                            <li>
                                <strong>Zwecke:</strong> Kommunikation, Angebots- und Vertragsvorbereitung.
                            </li>
                            <li>
                                <strong>Rechtsgrundlage:</strong> Vertragserfüllung & vorvertragliche Anfragen (Art. 6
                                Abs. 1 lit. b), berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                            </li>
                        </ul>
                    </div>

                    {/* Webanalyse, Monitoring und Optimierung */}
                    <div id="m263" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Webanalyse, Monitoring und Optimierung</H2>
                        <P>
                            Wir verwenden Analyse-Tools (z. B. Google Analytics) zur Auswertung des Nutzerverhaltens und
                            A/B-Tests, um unsere Angebote zu optimieren.
                        </P>
                        <ul className="list-disc list-inside space-y-1 mt-4">
                            <li>
                                <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten, Pseudonymisierte Profile,
                                IP-Masking.
                            </li>
                            <li>
                                <strong>Betroffene Personen:</strong> Webseitenbesucher.
                            </li>
                            <li>
                                <strong>Zwecke:</strong> Reichweitenmessung, Performance-Optimierung, Usability-Tests.
                            </li>
                            <li>
                                <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a), berechtigtes
                                Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Präsenzen */}
                    <div id="m136" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Präsenzen in sozialen Netzwerken (Social Media)</H2>
                        <P>
                            Wir unterhalten Profile in Social Media (LinkedIn, X, Instagram). Datenverarbeitung erfolgt
                            auf den jeweiligen Plattformen; wir haben darauf keinen Einfluss.
                        </P>
                        <ul className="list-disc list-inside space-y-1 mt-4">
                            <li>
                                <strong>Verarbeitete Datenarten:</strong> Interaktionen (Likes, Kommentare), Metadaten.
                            </li>
                            <li>
                                <strong>Betroffene Personen:</strong> Follower, Interagierende Nutzer.
                            </li>
                            <li>
                                <strong>Zwecke:</strong> Öffentlichkeitsarbeit, Community-Management.
                            </li>
                            <li>
                                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                            </li>
                        </ul>
                    </div>

                    {/* Plug-ins & eingebettete Inhalte */}
                    <div id="m328" className="pt-8">
                        <H2 klasse="text-2xl mb-2">Plug-ins und eingebettete Funktionen sowie Inhalte</H2>
                        <P>
                            Wir binden Inhalte (Videos, Karten, Schriften) von Dritt-Servern ein. Dabei wird Ihre
                            IP-Adresse an den Anbieter übermittelt.
                        </P>
                        <ul className="list-disc list-inside space-y-1 mt-4">
                            <li>
                                <strong>Verarbeitete Datenarten:</strong> IP-Adresse, Browser-Infos, Nutzungsdaten.
                            </li>
                            <li>
                                <strong>Betroffene Personen:</strong> Webseitenbesucher.
                            </li>
                            <li>
                                <strong>Zwecke:</strong> Darstellung der Inhalte, Funktionalität.
                            </li>
                            <li>
                                <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a), berechtigtes
                                Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                            </li>
                        </ul>
                    </div>

                    {/* Generator-Hinweis */}
                    {/* <div className="pt-8">
                        <P klasse="text-xs text-gray-500">
                            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
                        </P>
                    </div> */}

                    {/* Weitere Abschnitte… */}
                    {/* Für Kürze hier nicht alle Sektionen abgebildet; einfach analog zum Muster oben fortsetzen */}
                </div>
            </section>
        </>
    );
}
