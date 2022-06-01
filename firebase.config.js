// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArcRhOU3JdIMbRoBgUkVMwcE8Vm0V75D4",
  authDomain: "new-react-app-54b97.firebaseapp.com",
  projectId: "new-react-app-54b97",
  storageBucket: "new-react-app-54b97.appspot.com",
  messagingSenderId: "1051187856028",
  appId: "1:1051187856028:web:2458cb9153d4914c7aa359",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
