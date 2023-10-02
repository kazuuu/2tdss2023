// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFfshbl-1xfDHVQ5Xh5_uBD9FAGvYln9s",
  authDomain: "fiap2023-d8cb7.firebaseapp.com",
  databaseURL: "https://fiap2023-d8cb7-default-rtdb.firebaseio.com",
  projectId: "fiap2023-d8cb7",
  storageBucket: "fiap2023-d8cb7.appspot.com",
  messagingSenderId: "276369474197",
  appId: "1:276369474197:web:527e8916c8e0132b49519c",
  measurementId: "G-CCY0RXGZPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
