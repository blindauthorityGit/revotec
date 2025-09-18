import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/functions/urlFor";
import { H1, H2, H3, H4, H5, P } from "@/typography";

// --- General rich text (articles/sections) ---
export const portableComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset) return null;
            const src = urlFor(value).width(1200).url();
            const alt = value.alt || "";
            return (
                <div className="my-6 relative w-full" style={{ aspectRatio: "16/9" }}>
                    <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
                </div>
            );
        },
    },
    block: {
        h1: ({ children }) => <H1>{children}</H1>,
        h2: ({ children }) => <H2>{children}</H2>,
        h3: ({ children }) => <H3>{children}</H3>,
        h4: ({ children }) => <H4>{children}</H4>,
        h5: ({ children }) => <H5>{children}</H5>,
        normal: ({ children }) => <P klasse="mb-8">{children}</P>,
        blockquote: ({ children }) => <blockquote className="border-l-4 pl-4 italic my-4">{children}</blockquote>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc ml-6 space-y-1">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal ml-6 space-y-1">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => (
            <li>
                <P>{children}</P>
            </li>
        ),
        number: ({ children }) => (
            <li>
                <P>{children}</P>
            </li>
        ),
    },
    marks: {
        strong: ({ children }) => <strong>{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
        underline: ({ children }) => <span className="underline">{children}</span>,
        strike: ({ children }) => <span className="line-through">{children}</span>,
        link: ({ value, children }) => {
            const href = value?.href || value?.url;
            const isExternal = href?.startsWith("http");
            return (
                <a
                    href={href}
                    className="underline"
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                    {children}
                </a>
            );
        },
        // <- important: match your schema marks
        primary: ({ children }) => <span className="text-primaryColor-500">{children}</span>,
        accent: ({ children }) => <span className="text-primaryColor-500">{children}</span>,
    },
};

// Wrapper for general PT with spacing rule for H2 (not the first)
export function PT({ value, className }) {
    if (!value) return null;
    return (
        <div className={`prose ${className || ""} [&>h2:not(:first-of-type)]:mt-10`}>
            <PortableText value={value} components={portableComponents} />
        </div>
    );
}

/** --- Headline PT (for hero headlines inside <H1>) ---
 * Renders inline (no <p>) and supports color marks.
 * Use like:
 *   <H1>
 *     <PTHeadline value={page.heroHeadline} />
 *   </H1>
 */
const headlineComponents = {
    block: {
        // render "normal" blocks as inline so we don't nest <p> in <h1>
        normal: ({ children }) => <>{children}</>,
    },
    marks: {
        strong: ({ children }) => <strong>{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
        primary: ({ children }) => <span className="text-primaryColor-500">{children}</span>,
        accent: ({ children }) => <span className="text-primaryColor-500">{children}</span>,
        link: ({ value, children }) => {
            const href = value?.href || value?.url;
            const isExternal = href?.startsWith("http");
            return (
                <a
                    href={href}
                    className="underline"
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                    {children}
                </a>
            );
        },
    },
};
export function PTHeadline({ value }) {
    if (!value) return null;
    return <PortableText value={value} components={headlineComponents} />;
}
