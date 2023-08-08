// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getStorage} from "firebase/storage";
/// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-5LIMQf38de5iqkIR7kBLcfjEio58dYA",
  authDomain: "fbpro-9e1e6.firebaseapp.com",
  projectId: "fbpro-9e1e6",
  storageBucket: "fbpro-9e1e6.appspot.com",
  messagingSenderId: "552468161401",
  appId: "1:552468161401:web:2ceaa1f7374f45dcd005a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);