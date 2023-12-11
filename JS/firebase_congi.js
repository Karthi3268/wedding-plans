// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL1hdN-lhzZnGR5O6p-0G06bCaZWp6gGo",
  authDomain: "wedding-planer-51267.firebaseapp.com",
  projectId: "wedding-planer-51267",
  storageBucket: "wedding-planer-51267.appspot.com",
  messagingSenderId: "861818527130",
  appId: "1:861818527130:web:00a1bc36e2d63e44beee23",
  measurementId: "G-BKGQPJNS2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function signup(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Signup Successfull");
    // ...
  })
  .catch((error) => {
   
    console.log(error.code,error.message);
    // ..
  });
}