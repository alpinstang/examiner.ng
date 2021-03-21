import { buildSchema, EntitySchema } from "@camberi/firecms";
import CustomColorTextField from "../../custom_field/CustomColorTextField";
import CustomBooleanPreview from "../../custom_preview/CustomBooleanPreview";

export const blogSchema: EntitySchema = buildSchema({
  name: "Blog entry",
  properties: {
    name: {
      title: "Name",
      validation: { required: true },
      dataType: "string",
    },
    gold_text: {
      title: "Gold text",
      description: "Short text to grab reader's attention.",
      dataType: "string",
      validation: { required: true },
      config: {
        field: CustomColorTextField,
        fieldProps: {
          color: "gold",
        },
      },
    },
    short_description: {
      title: "Preview post text",
      dataType: "string",
      validation: { required: true },
      description: "Preview content of the blog post.",
    },
    description: {
      title: "Content",
      dataType: "string",
      validation: { required: true },
      description: "Main content of the blog post.",
      config: {
        markdown: true,
      },
    },
    images: {
      title: "Images",
      dataType: "array",
      of: {
        dataType: "string",
        config: {
          storageMeta: {
            mediaType: "image",
            storagePath: "images",
            acceptedFiles: ["image/*"],
            metadata: {
              cacheControl: "max-age=1000000",
            },
          },
        },
      },
      description:
        "This fields allows uploading multiple images at once and reordering",
    },
    publish_date: {
      title: "Publish date",
      dataType: "timestamp",
    },
    priority: {
      title: "Priority",
      description:
        "Should this post override default date sorting? (top = 1, default = 0)",
      dataType: "number",
      config: {
        fieldProps: {
          default: 0,
        },
      },
    },
    status: {
      title: "Status",
      validation: { required: true },
      dataType: "string",
      config: {
        enumValues: {
          published: "Published",
          draft: "Draft",
        },
      },
    },
    tags: {
      title: "Tags",
      description: "Blog Post Tags",
      dataType: "array",
      of: {
        dataType: "string",
        config: {
          previewAsTag: true,
        },
      },
    },
  },
  defaultValues: {
    priority: 0,
    status: "draft",
    tags: [""],
  },
});
