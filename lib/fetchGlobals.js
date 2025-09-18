import client from "@/client";
import { globalsQuery } from "@/queries/globals";

export async function fetchGlobals() {
    const globals = await client.fetch(globalsQuery);
    return { globals }; // als Objekt, damit wir es leicht mergen können
}
