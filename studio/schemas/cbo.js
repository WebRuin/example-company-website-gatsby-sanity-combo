export default {
  name: "cbo",
  title: "Community Based Organization",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "contactInfo",
      title: "Contact Information",
      type: "string",
    },
    {
      name: "pointOfContact",
      title: "Point of Contact",
      type: "reference",
      to: { type: "poc" },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "cboCategory" } }],
    },
  ],
}
