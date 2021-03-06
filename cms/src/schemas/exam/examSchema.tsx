import { buildSchema, EntitySchema } from "@camberi/firecms";
import PriceTextPreview from "../../custom_preview/PriceTextPreview";

export const examSchema: EntitySchema = buildSchema({
  name: "Exam",
  properties: {
    name: {
      dataType: "string",
      title: "Name",
      validation: {
        required: true,
      },
    },
    exam_full_name: {
      title: "Long Exam Name",
      dataType: "string",
      description: "Long exam name.",
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
        "Description of the exam and requirements. Supports markdown syntax.",
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
      description: "Should this exam be visible in the website",
      longDescription:
        "Set this to true when you are ready for the exam to be available for users to access.",
    },
    has_schools: {
      dataType: "boolean",
      title: "Schools",
      description: "Is this exam different for different schools?",
      longDescription: "Set this to true to enable school selection.",
    },
    number_of_years: {
      dataType: "number",
      title: "Number of Years",
      validation: {
        min: 1,
        max: 1000,
      },
    },
    number_of_subjects: {
      dataType: "number",
      title: "Number of Subjects",
      validation: {
        min: 1,
        max: 1000,
      },
    },
    total_attempts: {
      dataType: "number",
      title: "Total Attempts",
      validation: {
        min: 1,
      },
    },
    tests_list: {
      dataType: "array",
      title: "Tests",
      description: "Associated Tests with Exam",
      longDescription:
        "To add more tests, go to the Tests page using the navigation sidebar on the left",
      of: {
        dataType: "reference",
        collectionPath: "tests",
      },
    },
  },
  defaultValues: {
    number_of_years: 1,
    number_of_subjects: 1,
    total_attempts: 1,
    currency: "DOL",
  },
  onPreDelete: () => {
    throw Error("Exam deletion not allowed! Please contact administrator.");
  },
});
