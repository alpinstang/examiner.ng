import { buildSchema, EntitySchema } from "@camberi/firecms";
import PriceTextPreview from "../../custom_preview/PriceTextPreview";

export const testSchema: EntitySchema = buildSchema({
  name: "Test",
  properties: {
    name: {
      dataType: "string",
      title: "Name",
      validation: {
        required: true,
      },
    },
    test_full_name: {
      title: "Long Test Name",
      dataType: "string",
      description: "Long test name.",
      validation: {
        required: true,
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
    price: {
      dataType: "number",
      title: "Price",
      validation: {
        requiredMessage: "You must set a price between 0 and 1000",
        min: 0,
        max: 1000,
      },
      config: {
        customPreview: PriceTextPreview,
      },
      description: "Price with range validation",
    },
    currency: {
      dataType: "string",
      title: "Currency",
      config: {
        enumValues: {
          EUR: "Euros",
          DOL: "Dollars",
          NGN: "Naira",
        },
      },
      validation: {
        required: true,
      },
    },
    description: {
      dataType: "string",
      title: "Description",
      description:
        "Description of the test and requirements. Supports markdown syntax.",
      config: {
        markdown: true,
      },
    },
    added_on: {
      dataType: "timestamp",
      title: "Added on",
      readOnly: true,
      autoValue: "on_create",
    },
    public: {
      dataType: "boolean",
      title: "Public",
      description: "Should this test be visible in the website",
      longDescription:
        "Set this to true when you are ready for the test to be available for users to access.",
    },
    questions_list: {
      title: "Questions associated with this test",
      description:
        "To add questions, it's recommended to use the CSV uploader.",
      dataType: "array",
      readOnly: true,
      of: {
        dataType: "reference",
        collectionPath: "tests/questions",
      },
    },
    questions_count: {
      dataType: "number",
      title: "Number of Subjects",
      validation: {
        min: 1,
        max: 1000,
      },
    },
    duration: {
      dataType: "number",
      title: "Duration",
      description: "Duration in minutes of the test.",
      validation: {
        min: 5,
      },
    },
  },
  defaultValues: {
    questions_count: 1,
    duration: 5,
    currency: "DOL",
  },
  onPreDelete: () => {
    throw Error("Test deletion not allowed! Please contact administrator.");
  },
});
