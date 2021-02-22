import { buildSchema } from "@camberi/firecms";

export const questionSchema = buildSchema({
	customId: true,
	name: "Question",
	properties: {
		name: {
			title: "Name",
			validation: { required: true },
			dataType: "string",
		},
		description: {
			title: "Question Description",
			validation: { required: true },
			dataType: "string",
			config: {
				multiline: true,
			},
		},
		options: {
			title: "Options",
			description: "Options",
			dataType: "map",
			properties: {
				one: {
					title: "Name 1",
					dataType: "string",
				},
				two: {
					title: "Name 2",
					dataType: "string",
				},
				three: {
					title: "Name 3",
					dataType: "string",
				},
				four: {
					title: "Name 4",
					dataType: "string",
				},
			},
		},
	},
});
