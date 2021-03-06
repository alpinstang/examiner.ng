import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
const storage = firebase.storage();

export { auth, db, now, storage, firebase };

//console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");
var styleArray = [
  'background-image:    url("http://www.threadbombing.com/data/media/2/EsvcgzrXEAM-G2X.gif")',
  "background-size: cover",
  "color: red",
  "padding: 10px 20px",
  "line-height: 55px",
  "width : 70px",
  "height : 70px",
  "border : 5px solid black",
];
console.log("%cBuy DogeCoin", styleArray.join(";"));
