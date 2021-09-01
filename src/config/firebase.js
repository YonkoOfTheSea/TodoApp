import * as firebase from "firebase/app"
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAAW2XdJGxIBDjkX89WOr88QtjLYbKUv_s",
    authDomain: "todo-app-259d4.firebaseapp.com",
    projectId: "todo-app-259d4",
    storageBucket: "todo-app-259d4.appspot.com",
    messagingSenderId: "1084283039625",
    appId: "1:1084283039625:web:04dc1c2f312d7bf720bb58"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();

export default firebaseAuth;