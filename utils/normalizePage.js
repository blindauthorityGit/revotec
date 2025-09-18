// utils/normalizePage.js
export async function normalizePageWithHrefs(rawPage, client) {
    if (!rawPage) return rawPage;

    // 1) Alle Reference-IDs sammeln (wir schauen nach Feldern namens "internal")
    const refIds = new Set();
    const visit = (node) => {
        if (Array.isArray(node)) return node.forEach(visit);
        if (node && typeof node === "object") {
            // internal reference?
            if (node.internal && node.internal._ref) refIds.add(node.internal._ref);
            // weiterlaufen
            Object.values(node).forEach(visit);
        }
    };
    visit(rawPage);

    // 2) Slugs/Titles in EINER Query holen
    const refs = refIds.size
        ? await client.fetch(`*[_id in $ids]{ _id, _type, title, "slug": slug.current }`, {
              ids: Array.from(refIds),
          })
        : [];
    const refMap = Object.fromEntries(refs.map((d) => [d._id, d]));

    // 3) Node erneut durchlaufen, hrefs bauen (url hat Vorrang, sonst interner slug)
    const mapNode = (node) => {
        if (Array.isArray(node)) return node.map(mapNode);

        if (node && typeof node === "object") {
            const out = {};
            for (const [k, v] of Object.entries(node)) out[k] = mapNode(v);

            // Link-Objekte erkennen (haben meist label/url/internal)
            const looksLikeLink =
                Object.prototype.hasOwnProperty.call(out, "label") ||
                Object.prototype.hasOwnProperty.call(out, "url") ||
                Object.prototype.hasOwnProperty.call(out, "internal");

            if (looksLikeLink) {
                const url = out.url;
                const internalRef = out.internal && out.internal._ref;
                const resolved = internalRef ? refMap[internalRef] : null;
                const internalHref = resolved?.slug
                    ? resolved.slug.startsWith("/")
                        ? resolved.slug
                        : `/${resolved.slug}`
                    : null;

                out.href = url || internalHref || out.href || "#";
            }
            return out;
        }

        return node;
    };

    return mapNode(rawPage);
}
