import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "New Delhi"',
    }),
    defineField({
      name: "initials",
      title: "Initials (2 letters)",
      type: "string",
      description: 'e.g. "RS" for Rahul Sharma',
      validation: (R) => R.max(3),
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      options: {
        list: [
          { title: "⭐⭐⭐⭐⭐ (5)", value: 5 },
          { title: "⭐⭐⭐⭐ (4)", value: 4 },
          { title: "⭐⭐⭐ (3)", value: 3 },
        ],
        layout: "radio",
      },
      initialValue: 5,
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "location" },
  },
});
