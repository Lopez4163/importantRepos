// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqrIO5S8LbCQCAI-GwZyiytNaAaivB8tA",
  authDomain: "auth-dev-7f1b9.firebaseapp.com",
  projectId: "auth-dev-7f1b9",
  storageBucket: "auth-dev-7f1b9.appspot.com",
  messagingSenderId: "143390777676",
  appId: "1:143390777676:web:477770690f26a18b17efe9",
  measurementId: "G-88B48KBBW9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app)

//export
export { auth, db, app }
