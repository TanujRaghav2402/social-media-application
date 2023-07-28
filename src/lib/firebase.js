import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2AWOGGXeIBnuBjnpDNHpDQ_9e3bKdqQM",
  authDomain: "social-media-app-b97ab.firebaseapp.com",
  projectId: "social-media-app-b97ab",
  storageBucket: "social-media-app-b97ab.appspot.com",
  messagingSenderId: "778516498260",
  appId: "1:778516498260:web:a8527662739b710afceac1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
