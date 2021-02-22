import {
	AdditionalColumnDelegate,
	AsyncPreviewComponent,
	Entity,
} from "@camberi/firecms";
import { productSchema } from "./productsSchema";

export const productAdditionalColumn: AdditionalColumnDelegate = {
	id: "spanish_title",
	title: "Spanish title",
	builder: (entity: Entity<typeof productSchema>) => (
		<AsyncPreviewComponent
			builder={entity.reference
				.collection("locales")
				.doc("es")
				.get()
				.then((snapshot: any) => snapshot.get("name") as string)}
		/>
	),
};
