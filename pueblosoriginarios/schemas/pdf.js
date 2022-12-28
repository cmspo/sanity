export default {
  name: "pdf",
  type: "document",
  title: "PDF",
  fields: [
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "categories" }],
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "shortDescription",
      type: "richTextBody",
      title: "Short Description",
    },
    {
      name: "description",
      type: "richTextBody",
      title: "Description",
    },
    {
      name: "centeredText",
      type: "richTextBody",
      title: "Centered Text",
    },
  ],
};
