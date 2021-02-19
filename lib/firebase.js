const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");
// require('firebase/analytics')

// const isClientSide = require('./isClientSide')

const firebaseConfig = {
  apiKey: "AIzaSyADHRgDbFT0XNyJJYf_u710nW5y-Nv8Wb4",
  authDomain: "examiner-app-3b4f8.firebaseapp.com",
  projectId: "examiner-app-3b4f8",
  storageBucket: "examiner-app-3b4f8.appspot.com",
  messagingSenderId: "107012632133",
  appId: "1:107012632133:web:d9d1ff8943be60aec43d2c",
  measurementId: "G-288C1RDDKK",
};

// Initialize Firebase
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const firebaseDB = firebaseApp.firestore();
// if (isClientSide()) firebase.analytics()

// Helpers
const docWithId = (doc) => ({ id: doc.id, ...doc.data() });

const getDocumentItem = async (docRef) => docWithId(await docRef.get());

const getCollectionItems = async (collectionRef) => {
  const collectionSnapshots = await collectionRef.get();
  const snapshots = [];
  collectionSnapshots.forEach((snapshot) => {
    snapshots.push(docWithId(snapshot));
  });
  return snapshots;
};

module.exports = {
  firebase,
  firebaseApp,
  firebaseDB,

  docWithId,
  getDocumentItem,
  getCollectionItems,
};
