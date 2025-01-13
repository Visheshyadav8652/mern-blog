// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a0829.firebaseapp.com",
  projectId: "mern-blog-a0829",
  storageBucket: "mern-blog-a0829.firebasestorage.app",
  messagingSenderId: "1044193723804",
  appId: "1:1044193723804:web:a613678bfda8da1599f459"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);