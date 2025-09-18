import { fetchGlobals } from "./fetchGlobals";

// Hilfsfunktion: nimm das kleinere revalidate, wenn beide eins liefern
const mergeRevalidate = (a, b) => {
    if (typeof a !== "number") return b;
    if (typeof b !== "number") return a;
    return Math.min(a, b);
};

// SSG / ISR
export function withStaticGlobals(pageGSP, { revalidate = 60 } = {}) {
    return async (ctx) => {
        const [{ globals }, pageResult = {}] = await Promise.all([
            fetchGlobals(),
            pageGSP ? pageGSP(ctx) : Promise.resolve({ props: {} }),
        ]);

        // pageResult kann {props, revalidate, notFound, redirect} enthalten
        if (pageResult.notFound) return pageResult;
        if (pageResult.redirect) return pageResult;

        return {
            props: { ...(pageResult.props || {}), globals },
            revalidate: mergeRevalidate(pageResult.revalidate, revalidate),
        };
    };
}

// SSR
export function withServerGlobals(pageGSSP) {
    return async (ctx) => {
        const [{ globals }, pageResult = {}] = await Promise.all([
            fetchGlobals(),
            pageGSSP ? pageGSSP(ctx) : Promise.resolve({ props: {} }),
        ]);

        if (pageResult.notFound) return pageResult;
        if (pageResult.redirect) return pageResult;

        return { props: { ...(pageResult.props || {}), globals } };
    };
}
