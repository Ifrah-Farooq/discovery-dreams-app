import { defineField, defineType, defineArrayMember } from "sanity";

export const vehicle = defineType({
  name: "vehicle",
  title: "Taxi Vehicle",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Vehicle Name",
      type: "string",
      description: 'e.g. "Innova / Innova Crysta"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: "examples",
      title: "Model Examples",
      type: "string",
      description: 'e.g. "Toyota Innova Crysta"',
    }),
    defineField({
      name: "capacity",
      title: "Passenger Capacity",
      type: "string",
      description: 'e.g. "6–7 Passengers"',
    }),
    defineField({
      name: "bags",
      title: "Luggage Capacity",
      type: "string",
      description: 'e.g. "4 Bags"',
    }),
    defineField({
      name: "pricePerDay",
      title: "Price Per Day",
      type: "string",
      description: 'e.g. "₹4,500"',
    }),
    defineField({
      name: "tag",
      title: "Tag Label",
      type: "string",
      description: 'e.g. "Most Popular", "Economy", "Premium"',
    }),
    defineField({
      name: "imageUrl",
      title: "Vehicle Photo URL",
      type: "url",
      description: "Paste an image URL (Unsplash or similar)",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: 'e.g. "AC", "USB Charging", "Captain Seats"',
    }),
    defineField({
      name: "ideal",
      title: "Ideal For",
      type: "string",
      description: 'e.g. "Families & Comfort Trips"',
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "pricePerDay" },
  },
});
