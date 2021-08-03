import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDgxH6AZ3ZC3qSeXdB7EILA96koRBtTBMU",
  authDomain: "thecheat-007.firebaseapp.com",
  databaseURL: "https://thecheat-007-default-rtdb.firebaseio.com",
  projectId: "thecheat-007",
  storageBucket: "thecheat-007.appspot.com",
  messagingSenderId: "30742964610",
  appId: "1:30742964610:web:aabb71a13177b8a39e479b",
  measurementId: "G-FKTEPQCQZQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
