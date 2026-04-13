import { defineField, defineType } from "sanity";

export const taxiRoute = defineType({
  name: "taxiRoute",
  title: "Taxi Route",
  type: "document",
  fields: [
    defineField({
      name: "from",
      title: "From",
      type: "string",
      description: 'e.g. "Srinagar"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: "to",
      title: "To",
      type: "string",
      description: 'e.g. "Gulmarg"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: "distance",
      title: "Distance",
      type: "string",
      description: 'e.g. "56 km"',
    }),
    defineField({
      name: "duration",
      title: "Travel Time",
      type: "string",
      description: 'e.g. "1.5 hrs"',
    }),
    defineField({
      name: "price",
      title: "Sedan Fare (One Way)",
      type: "string",
      description: 'e.g. "₹1,800"',
    }),
    defineField({
      name: "popular",
      title: "Mark as Popular",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "from", subtitle: "to" },
    prepare({ title, subtitle }) {
      return { title: `${title} → ${subtitle}` };
    },
  },
});
