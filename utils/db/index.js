import admin from "firebase-admin";
import ServiceAccount from "../../config/serviceProd.json";
import ServiceAccountDev from "../../config/serviceAccountKey.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(
        process.env.ENVIRONMENT == "production"
          ? ServiceAccount
          : ServiceAccountDev
      ),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
