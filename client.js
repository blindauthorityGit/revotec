// client.js
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "2yy1o1fc",
    dataset: "production",
    apiVersion: "2025-09-10", // use current UTC date - see "specifying API version"!
    useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
