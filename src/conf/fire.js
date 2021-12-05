import firebase from "firebase/app";

var firebaseConfig = {
  authDomain: "jiitkonakt.firebaseapp.com",
  projectId: "jiitkonakt",
  storageBucket: "jiitkonakt.appspot.com",
  messagingSenderId: "749610689536",
  appId: "1:749610689536:web:705dd700dde54f9466e4e5",
  measurementId: "G-FT4VYVRFLG"
};

const fire = firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const users = db.ref("users");
export default fire;