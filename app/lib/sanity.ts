import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    dataset: "production",
    projectId: "qdffkc2c",
    apiVersion: "2024-07-21",
    useCdn: false,
});

const builder = createImageUrlBuilder(client)

export function urlFor(source:any){
    return builder.image(source)
}