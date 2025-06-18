// pages/impressum.jsx
import Head from "next/head";
import { H1, H2, H3, P } from "@/typography";

export default function ImpressumPage() {
    return (
        <>
            <Head>
                <title>Impressum – Revotec GmbH</title>
                <meta name="description" content="Angaben gemäß § 5 TMG und Kontaktinformationen der Revotec GmbH" />
            </Head>
            <section className="py-16 lg:py-30 bg-background-dark text-gray-100">
                <div className="container mx-auto px-6 md:px-12 space-y-8">
                    <H1 klasse="text-4xl lg:text-5xl mb-12">Impressum</H1>

                    <div className="space-y-6">
                        <div>
                            <H3 klasse="text-2xl mb-2">Angaben gemäß § 5 TMG</H3>
                            <P>
                                Revotec GmbH
                                <br />
                                Musterstraße 1<br />
                                12345 Musterstadt
                                <br />
                                Handelsregister: HRB 123456 (Amtsgericht Musterstadt)
                                <br />
                                Geschäftsführer: Max Mustermann
                            </P>
                        </div>

                        <div>
                            <H3 klasse="text-2xl mb-2">Kontakt</H3>
                            <P>
                                Telefon: +49 5555 55555
                                <br />
                                E-Mail: info@revotec-gmbh.de
                            </P>
                        </div>

                        <div>
                            <H3 klasse="text-2xl mb-2">Umsatzsteuer-ID</H3>
                            <P>USt-ID gemäß § 27 a UStG: DE 123456789</P>
                        </div>

                        <div>
                            <H3 klasse="text-2xl mb-2">Verantwortlich für den Inhalt</H3>
                            <P>
                                Max Mustermann
                                <br />
                                Musterstraße 1<br />
                                12345 Musterstadt
                            </P>
                        </div>

                        <div>
                            <H3 klasse="text-2xl mb-2">Haftungsausschluss</H3>
                            <P>
                                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
                                externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
                                verantwortlich.
                            </P>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
