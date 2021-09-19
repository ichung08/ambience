import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxBDFAN6oSlfTt5_4n5S328JPiPOHc4eU",
  authDomain: "ambience-bcb99.firebaseapp.com",
  projectId: "ambience-bcb99",
  storageBucket: "ambience-bcb99.appspot.com",
  messagingSenderId: "400128965565",
  appId: "1:400128965565:web:c785441f16041aad7db0d4"
};


export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore();