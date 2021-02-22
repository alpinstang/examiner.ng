import { firebaseClient } from "./firebaseClient";

const createProfile = (userRecord: any) => {
  console.log("Creating User Profile");
  console.log(userRecord);
  const db = firebaseClient.firestore();

  const { email, uid } = userRecord.user;
  debugger;
  return db.collection("users").doc(uid).set({ email }).catch(console.error);
};

export default createProfile;
