import Rebase from "re-base";
import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDCX0a1PFYQW7LZicYqxIYiCOLBYa6eE14",
  authDomain: "catch-of-the-day-26b75.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-26b75.firebaseio.com",
  projectId: "catch-of-the-day-26b75",
  storageBucket: "catch-of-the-day-26b75.appspot.com",
  messagingSenderId: "200723324049"
};
const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
