import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWCQtIJyCKuBrBDqIh69qM0kQn60lFC7c",
  authDomain: "auth-project-693b6.firebaseapp.com",
  projectId: "auth-project-693b6",
  storageBucket: "auth-project-693b6.appspot.com",
  messagingSenderId: "396594302443",
  appId: "1:396594302443:web:10e09c0fcd14e591355dae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);