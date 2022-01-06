// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const FirebasePlugin = {
  install (Vue) {
    //////////////////////////////////////////
    // INIT //////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////

    // INIT - firebase
    firebase.initializeApp({
      apiKey: "AIzaSyARG_pVQpAPeIejToQzM9_zDqIS0KVuw44",
      authDomain: "chekt-design.firebaseapp.com",
      projectId: "chekt-design",
      storageBucket: "chekt-design.appspot.com",
      messagingSenderId: "124192946374",
      appId: "1:124192946374:web:479f93ba5c14c605f1bfc7",
      measurementId: "G-YBDT7CCJ17"
    })

    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    
    let fb = {
      firebase,
    }
    Vue.prototype.$firebase = fb
    Vue.firebase = fb
  }
}

export default FirebasePlugin