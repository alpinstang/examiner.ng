import { buildSchema, EntitySchema } from "@camberi/firecms";
import { categories } from "./categoriesEnum";
import { locales } from "./localesEnum";
import PriceTextPreview from "../../custom_preview/PriceTextPreview";

export const productSchema: EntitySchema = buildSchema({
	name: "Product",
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
			title: "Category",
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
				},
			},
			validation: {
				required: true,
			},
		},
		public: {
			dataType: "boolean",
			title: "Public",
			description: "Should this product be visible in the website",
			longDescription:
				"Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
		},
		brand: {
			dataType: "string",
			title: "Brand",
			validation: {
				required: true,
			},
		},
		description: {
			dataType: "string",
			title: "Description",
			description: "Example of a markdown field",
			config: {
				markdown: true,
			},
		},
		amazon_link: {
			dataType: "string",
			title: "Amazon link",
			config: {
				url: true,
			},
		},
		added_on: {
			dataType: "timestamp",
			title: "Added on",
			readOnly: true,
			autoValue: "on_create",
		},
		images: {
			dataType: "array",
			title: "Images",
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
			description: "This fields allows uploading multiple images at once",
		},
		related_products: {
			dataType: "array",
			title: "Related products",
			description: "Reference to self",
			of: {
				dataType: "reference",
				collectionPath: "products",
			},
		},
		publisher: {
			title: "Publisher",
			description: "This is an example of a map property",
			dataType: "map",
			properties: {
				name: {
					title: "Name",
					dataType: "string",
				},
				external_id: {
					title: "External id",
					dataType: "string",
				},
			},
		},
		min_known_price: {
			dataType: "number",
			title: "Min known price",
			readOnly: true,
			description: "Minimum price this product has ever had",
		},
		prime_eligible: {
			dataType: "boolean",
			title: "Prime eligible",
			readOnly: true,
		},
		available_locales: {
			title: "Available locales",
			description:
				"This is an example of a disabled field that gets updated trough a Cloud Function, try changing a locale 'selectable' value",
			longDescription:
				"Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
			dataType: "array",
			readOnly: true,
			of: {
				dataType: "string",
				config: {
					enumValues: locales,
				},
			},
		},
		uppercase_name: {
			title: "Uppercase Name",
			dataType: "string",
			readOnly: true,
			description: "This field gets updated with a preSave hook",
		},
	},
	defaultValues: {
		currency: "USD",
		publisher: {
			name: "Default publisher",
		},
	},
	onPreDelete: () => {
		throw Error("Product deletion not allowed!");
	},
});
