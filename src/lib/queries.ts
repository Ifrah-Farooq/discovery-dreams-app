import { sanityClient, isSanityConfigured } from "./sanityClient";
import type { Package } from "@/constants/packages";
import type { Dest } from "@/constants/destinations";

/* ─── Types returned by Sanity (images projected to plain URL strings) ── */

export interface SanityVehicle {
  name: string;
  examples: string;
  capacity: string;
  bags: string;
  pricePerDay: string;
  tag: string;
  tagColor?: string;
  imageUrl: string;
  features: string[];
  ideal: string;
}

export interface SanityRoute {
  from: string;
  to: string;
  distance: string;
  duration: string;
  price: string;
  popular: boolean;
}

export interface SanityTestimonial {
  name: string;
  location: string;
  initials: string;
  color?: string;
  text: string;
  rating: number;
}

/* ─── GROQ queries ───────────────────────────────────────────────────── */

const PACKAGES_QUERY = `
  *[_type == "tourPackage"] | order(orderRank asc) {
    "slug": slug.current,
    title, tagline,
    "image": image.asset->url,
    badge, route, duration, nights, days,
    price, priceNote, groupSize, rating, reviews,
    overview, highlights,
    itinerary[]{ day, title, activities, overnight },
    inclusions, exclusions,
    pricing[]{ label, price },
    tips, bestTime
  }
`;

const DESTINATIONS_QUERY = `
  *[_type == "destination"] | order(orderRank asc) {
    name, tagline, desc,
    "images": images[].asset->url,
    category, highlight
  }
`;

const VEHICLES_QUERY = `
  *[_type == "vehicle"] | order(orderRank asc) {
    name, examples, capacity, bags, pricePerDay,
    tag, imageUrl, features, ideal
  }
`;

const ROUTES_QUERY = `
  *[_type == "taxiRoute"] | order(orderRank asc) {
    from, to, distance, duration, price, popular
  }
`;

const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(orderRank asc) {
    name, location, initials, text, rating
  }
`;

/* ─── Fetch helpers (return null when Sanity not configured) ─────────── */

export async function fetchPackages(): Promise<Package[] | null> {
  if (!isSanityConfigured) return null;
  const data = await sanityClient.fetch<Package[]>(PACKAGES_QUERY);
  return data?.length ? data : null;
}

export async function fetchDestinations(): Promise<Dest[] | null> {
  if (!isSanityConfigured) return null;
  const data = await sanityClient.fetch<Dest[]>(DESTINATIONS_QUERY);
  return data?.length ? data : null;
}

export async function fetchVehicles(): Promise<SanityVehicle[] | null> {
  if (!isSanityConfigured) return null;
  const data = await sanityClient.fetch<SanityVehicle[]>(VEHICLES_QUERY);
  return data?.length ? data : null;
}

export async function fetchRoutes(): Promise<SanityRoute[] | null> {
  if (!isSanityConfigured) return null;
  const data = await sanityClient.fetch<SanityRoute[]>(ROUTES_QUERY);
  return data?.length ? data : null;
}

export async function fetchTestimonials(): Promise<SanityTestimonial[] | null> {
  if (!isSanityConfigured) return null;
  const data = await sanityClient.fetch<SanityTestimonial[]>(TESTIMONIALS_QUERY);
  return data?.length ? data : null;
}
