import { EnumValues } from "@camberi/firecms";

export const questions: EnumValues<string> = {
	es: "Spanish",
	de: "German",
	en: "English",
	it: "Italian",
	fr: {
		label: "French",
		disabled: true,
	},
};
