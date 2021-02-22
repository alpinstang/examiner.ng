import * as firebase from "firebase/app";
import "firebase/auth";

if (typeof window !== "undefined" && !firebase.apps.length) {
	firebase.initializeApp({
		apiKey: "AIzaSyADHRgDbFT0XNyJJYf_u710nW5y-Nv8Wb4",
		authDomain: "examiner-app-3b4f8.firebaseapp.com",
		projectId: "examiner-app-3b4f8",
		storageBucket: "examiner-app-3b4f8.appspot.com",
		messagingSenderId: "107012632133",
		appId: "1:107012632133:web:d9d1ff8943be60aec43d2c",
		measurementId: "G-288C1RDDKK",
	});
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

export { firebase };
