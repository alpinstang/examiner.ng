import { buildSchema } from "@camberi/firecms";

export const questionSchema = buildSchema({
  name: "Question",
  properties: {
    name: {
      title: "Name",
      validation: { required: true },
      dataType: "string",
    },
    question: {
      title: "Question",
      validation: { required: true },
      dataType: "string",
      config: {
        multiline: true,
      },
    },
    answer: {
      title: "Correct Answer",
      validation: { required: true },
      dataType: "string",
      config: {
        multiline: true,
      },
    },
    options: {
      title: "Choices",
      description: "Choices for the question.",
      dataType: "map",
      properties: {
        option_a: {
          title: "Option A",
          validation: { required: true },
          dataType: "string",
          config: {
            multiline: true,
          },
        },
        option_b: {
          title: "Option B",
          validation: { required: true },
          dataType: "string",
          config: {
            multiline: true,
          },
        },
        option_c: {
          title: "Option C",
          validation: { required: true },
          dataType: "string",
          config: {
            multiline: true,
          },
        },
        option_d: {
          title: "Option D",
          validation: { required: true },
          dataType: "string",
          config: {
            multiline: true,
          },
        },
      },
    },
    explanations: {
      title: "Explanations",
      description: "Explanations",
      dataType: "map",
      properties: {
        option_a: {
          title: "Answer A",
          dataType: "string",
          config: {
            multiline: true,
          },
        },
        option_b: {
          title: "Answer B",
          dataType: "string",
          config: {
            multiline: true,
          },
        },
        option_c: {
          title: "Answer C",
          dataType: "string",
          config: {
            multiline: true,
          },
        },
        option_d: {
          title: "Answer D",
          dataType: "string",
          config: {
            multiline: true,
          },
        },
      },
    },
    tags: {
      title: "Tags",
      description: "Tags",
      dataType: "array",
      of: {
        dataType: "string",
        config: {
          previewAsTag: true,
        },
      },
    },
    main_image: {
      dataType: "string",
      title: "Image",
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
      description: "Upload field for images",
    },
  },
});
