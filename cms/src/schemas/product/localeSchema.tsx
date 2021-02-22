import { buildSchema } from "@camberi/firecms";
import { locales } from "./localesEnum";

export const localeSchema = buildSchema({
	customId: locales,
	name: "Locale",
	properties: {
		name: {
			title: "Name",
			validation: { required: true },
			dataType: "string",
		},
		description: {
			title: "Description",
			validation: { required: true },
			dataType: "string",
			config: {
				multiline: true,
			},
		},
		selectable: {
			title: "Selectable",
			description: "Is this locale selectable",
			longDescription:
				"Changing this value triggers a cloud function that updates the parent product",
			dataType: "boolean",
		},
		video: {
			title: "Video",
			dataType: "string",
			validation: { required: false },
			config: {
				storageMeta: {
					mediaType: "video",
					storagePath: "videos",
					acceptedFiles: ["video/*"],
				},
			},
			columnWidth: 400,
		},
	},
});
