import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseDevConfig = {
  apiKey: process.env.NEXT_PUBLIC_DEV_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_DEV_FIREBASE_AUTHA_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DEV_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_DEV_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_DEV_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_DEV_FIREBASE_MESSEAGING_ID,
  appId: process.env.NEXT_PUBLIC_DEV_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_DEV_FIREBASE_MEASURMENT_ID,
};

const firebaseProdConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHA_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSEAGING_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};

const firebaseConfig =
  process.env.ENVIRONMENT == "production"
    ? firebaseProdConfig
    : firebaseDevConfig;

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage, firebaseConfig };
