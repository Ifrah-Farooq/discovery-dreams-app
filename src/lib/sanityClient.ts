import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string) || "production";

/** True only when the env vars are wired up */
export const isSanityConfigured = Boolean(projectId);

export const sanityClient = createClient({
  projectId: projectId || "placeholder",
  dataset,
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(sanityClient);

/** Convert a Sanity image reference into a URL string */
export const urlFor = (source: SanityImageSource) =>
  builder.image(source).auto("format").url();
