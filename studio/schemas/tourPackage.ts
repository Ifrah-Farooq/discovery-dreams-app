import { defineField, defineType, defineArrayMember } from "sanity";

export const tourPackage = defineType({
  name: "tourPackage",
  title: "Tour Package",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Package Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "title" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short one-liner shown under the title",
    }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: 'e.g. "Best Seller", "Top Rated", "Adventure"',
    }),
    defineField({
      name: "route",
      title: "Route",
      type: "string",
      description: 'e.g. "Srinagar · Gulmarg · Pahalgam"',
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'e.g. "5 Days / 4 Nights"',
    }),
    defineField({ name: "nights", title: "Number of Nights", type: "number" }),
    defineField({ name: "days", title: "Number of Days", type: "number" }),
    defineField({
      name: "price",
      title: "Starting Price",
      type: "string",
      description: 'e.g. "₹14,500"',
    }),
    defineField({
      name: "priceNote",
      title: "Price Note",
      type: "string",
      description: 'e.g. "per person (twin sharing)"',
    }),
    defineField({
      name: "groupSize",
      title: "Group Size",
      type: "string",
      description: 'e.g. "2–10 People"',
    }),
    defineField({
      name: "rating",
      title: "Rating (out of 5)",
      type: "number",
      validation: (R) => R.min(0).max(5),
    }),
    defineField({
      name: "reviews",
      title: "Number of Reviews",
      type: "number",
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Key highlights shown on the detail page",
    }),
    defineField({
      name: "itinerary",
      title: "Day-by-Day Itinerary",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "day", title: "Day Number", type: "number" }),
            defineField({ name: "title", title: "Day Title", type: "string" }),
            defineField({
              name: "activities",
              title: "Activities",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "overnight",
              title: "Overnight Stay",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "inclusions",
      title: "What's Included",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "exclusions",
      title: "What's Not Included",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "pricing",
      title: "Group Pricing",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "price", title: "Price", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "tips",
      title: "Travel Tips",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "bestTime",
      title: "Best Time to Visit",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
      description: "Lower number = shown first",
    }),
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "price" },
  },
  orderings: [{ title: "Display Order", name: "orderRank", by: [{ field: "orderRank", direction: "asc" }] }],
});
