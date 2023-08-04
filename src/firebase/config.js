// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfEp_haqdX1pWXLEyTF9I5Ayuisp847ec",
  authDomain: "journal-19af6.firebaseapp.com",
  projectId: "journal-19af6",
  storageBucket: "journal-19af6.appspot.com",
  messagingSenderId: "426271615998",
  appId: "1:426271615998:web:0544b441f33d77f05c2eaf"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FireStoreDB = getFirestore(FirebaseApp);