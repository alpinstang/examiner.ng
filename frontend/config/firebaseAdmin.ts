import * as firebaseAdmin from "firebase-admin";

// get this JSON from the Firebase board
// you can also store the values in environment variables
if (process.env.SA_PRIVATE_KEY) {
	console.log("Found env keys, using environment variables.");
} else {
	console.log("No environment variables found!");
}

if (!firebaseAdmin.apps.length) {
	firebaseAdmin.initializeApp({
		credential: firebaseAdmin.credential.cert({
			privateKey: process.env.SA_PRIVATE_KEY,
			clientEmail: process.env.SA_CLIENT_EMAIL,
			projectId: process.env.SA_PROJECT_ID,
		}),
		databaseURL: `https://${process.env.SA_PROJECT_ID}.firebaseio.com`,
	});
}

export { firebaseAdmin };
