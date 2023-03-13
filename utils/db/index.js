import admin from "firebase-admin";
import ServiceAccount from "../../config/serviceProd.json";
console.log(ServiceAccount);
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(ServiceAccount),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
