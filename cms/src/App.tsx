import React from "react";
import {
	AdditionalView,
	Authenticator,
	buildCollection,
	buildSchema,
	CMSApp,
	EntityCollection,
	EntitySaveProps,
	ExtraActionsParams,
	SchemaResolver,
} from "@camberi/firecms";
import firebase from "firebase";

import { firebaseConfig } from "./firebase_config";
import { SampleExtraActions } from "./SampleExtraActions";
import logo from "./images/logo.png";
import {
	blogSearchDelegate,
	productsSearchDelegate,
	usersSearchDelegate,
} from "./algolia_utils";

import { blogSchema } from "./schemas/blog/blogSchema";
import { productSchema } from "./schemas/product/productsSchema";
import { testEntitySchema } from "./schemas/testEntitySchema";
import { localeSchema } from "./schemas/product/localeSchema";
import { productAdditionalColumn } from "./schemas/product/productAdditionalColDelegate";
import { usersSchema } from "./schemas/user/usersSchema";

import { examSchema } from "./schemas/exam/examSchema";
import { questionSchema } from "./schemas/exam/questionSchema";

function App() {
	productSchema.onPreSave = ({
		schema,
		collectionPath,
		id,
		values,
		status,
	}: EntitySaveProps<typeof productSchema>) => {
		values.uppercase_name = values.name.toUpperCase();
		return values;
	};

	productSchema.onSaveSuccess = (props) => {
		console.log("onSaveSuccess", props);
	};

	productSchema.onDelete = (props) => {
		console.log("onDelete", props);
	};

	testEntitySchema.onPreSave = ({
		schema,
		collectionPath,
		id,
		values,
		status,
	}: EntitySaveProps<typeof testEntitySchema>) => {
		console.log("custom onPreSave");
		if (!values.empty_string) values.empty_string = "";
		return values;
	};

	const productExtraActionBuilder = ({
		view,
		selectedEntities,
	}: ExtraActionsParams) => {
		return <SampleExtraActions selectedEntities={selectedEntities} />;
	};

	const localeCollection: EntityCollection<
		typeof localeSchema
	> = buildCollection({
		name: "Locales",
		relativePath: "locales",
		deleteEnabled: true,
		schema: localeSchema,
		defaultSize: "l",
	});
	const productsCollection = buildCollection({
		relativePath: "products",
		schema: productSchema,
		name: "Products",
		group: "Store",
		textSearchDelegate: productsSearchDelegate,
		additionalColumns: [productAdditionalColumn],
		extraActions: productExtraActionBuilder,
		subcollections: [localeCollection],
		excludedProperties: ["images", "related_products"],
		filterableProperties: ["price", "available_locales"],
	});

	const usersCollection = buildCollection<typeof usersSchema>({
		relativePath: "users",
		schema: usersSchema,
		name: "Users",
		group: "Testing",
		textSearchDelegate: usersSearchDelegate,
		properties: ["first_name", "last_name", "email", "phone", "picture"],
	});

	const blogCollection = buildCollection({
		relativePath: "blog",
		schema: blogSchema,
		name: "Blog",
		group: "Content",
		textSearchDelegate: blogSearchDelegate,
		properties: [
			"name",
			"images",
			"status",
			"reviewed",
			"products",
			"gold_text",
			"long_text",
		],
		filterableProperties: ["name", "status"],
		initialFilter: {
			status: ["==", "published"],
		},
	});

	const questionCollection: EntityCollection<
		typeof questionSchema
	> = buildCollection({
		name: "Questions",
		relativePath: "questions",
		deleteEnabled: true,
		schema: questionSchema,
		defaultSize: "l",
	});
	const examCollection = buildCollection({
		relativePath: "exams",
		schema: examSchema,
		name: "Exams",
		group: "Testing",
		subcollections: [questionCollection],
		excludedProperties: ["images", "available", "questions", "uppercase_name"],
		filterableProperties: ["price", "category"],
	});

	const navigation: EntityCollection[] = [
		examCollection,
		productsCollection,
		usersCollection,
		blogCollection,
	];

	const myAuthenticator: Authenticator = (user?: firebase.User) => {
		// Check if the user is someone we want to manage CMS
		if (
			user?.email === "jcm.codes@gmail.com" ||
			user?.email === "ileolagold.olalekan@gmail.com"
		) {
			console.log("Allowing access to ", user?.email);
			return true;
		}
		// Otherwise deny access
		console.log("Not Authorized.");
		return false;
	};

	const customSchemaResolver: SchemaResolver = ({
		entityId,
		collectionPath,
	}: {
		entityId?: string;
		collectionPath: string;
	}) => {
		if (entityId === "B0017TNJWY" && collectionPath === "products") {
			const customProductSchema = buildSchema({
				name: "Custom product",
				properties: {
					name: {
						title: "Name",
						description:
							"This entity is using a schema overridden by a schema resolver",
						validation: { required: true },
						dataType: "string",
					},
				},
			});

			console.log("Using custom schema resolver", collectionPath, entityId);
			return { schema: customProductSchema };
		}
	};

	const onFirebaseInit = (config: Object) => {
		// models.firestore().useEmulator("localhost", 8080);
	};

	return (
		<CMSApp
			name={"Examiner CMS"}
			authentication={myAuthenticator}
			// signInOptions={[
			// 	firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			// 	firebase.auth.EmailAuthProvider.PROVIDER_ID,
			// ]}
			primaryColor="#047857"
			secondaryColor="#ffd000"
			allowSkipLogin={false}
			logo={logo}
			navigation={navigation}
			schemaResolver={customSchemaResolver}
			// In the production environment, the configuration is fetched from the environment automatically
			firebaseConfig={firebaseConfig}
			// firebaseConfig={process.env.NODE_ENV !== "production" ? firebaseConfig : undefined}
			onFirebaseInit={onFirebaseInit}
		/>
	);
}

export default App;
