import { defineField, defineType, defineArrayMember } from "sanity";

const CATEGORIES = [
  { title: "Popular", value: "Popular" },
  { title: "Picnic Spots", value: "Picnic Spots" },
  { title: "Hill Stations", value: "Hill Stations" },
  { title: "Lakes & Springs", value: "Lakes & Springs" },
  { title: "Pilgrimages", value: "Pilgrimages" },
  { title: "Ladakh", value: "Ladakh" },
];

export const destination = defineType({
  name: "destination",
  title: "Destination",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Destination Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'e.g. "City of Lakes & Gardens"',
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "images",
      title: "Photos",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
      description: "Upload one or more photos. Multiple photos create a carousel.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: CATEGORIES, layout: "radio" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "highlight",
      title: "Highlight Badge",
      type: "string",
      description: 'Optional badge e.g. "Must Visit", "Hidden Gem", "Trekking"',
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
      description: "Lower number = shown first within category",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "images.0" },
  },
});
