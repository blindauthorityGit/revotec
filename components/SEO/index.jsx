import Head from "next/head";
import { useRouter } from "next/router";
import site from "@/lib/siteConfig"; // { siteName, siteUrl, defaultOgImage }

function robotsTag({ noindex, nofollow }) {
    if (noindex && nofollow) return "noindex, nofollow";
    if (noindex) return "noindex, follow";
    if (nofollow) return "index, nofollow";
    return "index, follow";
}

export default function SEO({
    seo = {}, // dein Sanity-SEO-Objekt
    title, // Fallback Title
    description, // Fallback Description
    image, // Fallback OG image URL (string)
    canonicalUrl, // Fallback Canonical (string)
    siteName = site.siteName,
}) {
    const router = useRouter();
    const urlFromRouter = `${site.siteUrl}${router.asPath?.split("#")[0] || ""}`;

    const metaTitle = seo?.title || title || siteName;
    const metaDesc = seo?.description || description || "";
    const ogImage = seo?.ogImage?.asset?.url || image || site.defaultOgImage || "";

    const canonical = seo?.canonicalUrl || canonicalUrl || urlFromRouter;
    const robots = robotsTag({
        noindex: !!seo?.noindex,
        nofollow: !!seo?.nofollow,
    });

    return (
        <Head>
            {/* Primary */}
            <title>{metaTitle}</title>
            {metaDesc && <meta name="description" content={metaDesc} />}
            <meta name="robots" content={robots} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={metaTitle} />
            {metaDesc && <meta property="og:description" content={metaDesc} />}
            {canonical && <meta property="og:url" content={canonical} />}
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            {metaDesc && <meta name="twitter:description" content={metaDesc} />}
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Head>
    );
}
