import { buildSchema, EntitySchema } from "@camberi/firecms";
import { categories } from "../product/categoriesEnum";
import PriceTextPreview from "../../custom_preview/PriceTextPreview";
import { questions } from "./questionsEnum";

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
			validation: {
				required: true,
			},
		},
		category: {
			dataType: "string",
			title: "Exam Type",
			config: {
				enumValues: categories,
			},
		},
		available: {
			dataType: "boolean",
			title: "Available",
			columnWidth: 100,
		},
		price: ({ values }) => ({
			dataType: "number",
			title: "Price",
			validation: {
				requiredMessage: "You must set a price between 0 and 1000",
				min: 0,
				max: 1000,
			},
			disabled: values.available
				? false
				: {
						clearOnDisabled: true,
						disabledMessage: "You can only set the price on available items",
				  },
			config: {
				customPreview: PriceTextPreview,
			},
			description: "Price with range validation",
		}),
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
		public: {
			dataType: "boolean",
			title: "Public",
			description: "Should this exam be visible in the website",
			longDescription:
				"Set this to true when you are ready for the exam to be available for users to access.",
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
		questions: {
			title: "Questions",
			description: "Questions for the exam.",
			longDescription:
				"Go to the Questions tab to add/modify questions for this exam.",
			dataType: "array",
			readOnly: true,
			of: {
				dataType: "string",
				config: {
					enumValues: questions,
				},
			},
		},
		added_on: {
			dataType: "timestamp",
			title: "Added on",
			readOnly: true,
			autoValue: "on_create",
		},
		uppercase_name: {
			title: "Uppercase Name",
			dataType: "string",
			readOnly: true,
			description: "This field gets updated with a preSave hook",
		},
	},
	defaultValues: {
		currency: "DOL",
	},
	onPreDelete: () => {
		throw Error("Exam deletion not allowed!");
	},
});
