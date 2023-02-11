import firebase from "firebase/app";
import "firebase/auth";

export const auth=firebase.initializeApp= ({
    apiKey: "AIzaSyBmpCFkyzqNweFFraQMaWOjp3s9079PmQ8",
    authDomain: "unichat-138f5.firebaseapp.com",
    projectId: "unichat-138f5",
    storageBucket: "unichat-138f5.appspot.com",
    messagingSenderId: "936245543325",
    appId: "1:936245543325:web:9b59296b5d9b21021aaf74"
  }).auth;