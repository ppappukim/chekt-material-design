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

    //////////////////////////////////////////
    // AUTH //////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////

    // SET - onAuthStateChanged <-- no need to do this here. it is handled in `AuthManager.vue`
    // firebase.auth().onAuthStateChanged((user) => {
    //   user ? handleSignedInUser(user) : handleSignedOutUser()
    // })
    // if (this.$firebase.ui.isPendingRedirect()) {
    //   this.TestLogin()
    // }

    // INIT - firebase - authentication ui
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    const uiElementID = 'firebaseui-auth-container'

    // SET - getAuthUIElement
    var getAuthUIElement = function () {
      let uiElement = document.getElementById(uiElementID)
      // CASE 1 - Already appended
      if (uiElement) {
        return uiElement
      }
      // CASE 2 - Not yet appended
      uiElement = document.createElement('div')
      uiElement.id = uiElementID
      document.body.appendChild(uiElement)
      return uiElement
    }

    // SET - removeAuthUIElement
    var removeAuthUIElement = function () {
      let uiElement = document.getElementById(uiElementID)
      if (!uiElement) return
      uiElement.parentNode.removeChild(uiElement)
    }

    var signUp = function ({email, password}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
      // .then((user) => {
      //   // Signed in 
      //   // ...
      // })
      // .catch((error) => {
      //   var errorCode = error.code
      //   var errorMessage = error.message
      //   // ..
      // })
    }

    var signIn = function ({email, password}) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
      // .then((user) => {
      //   // Signed in 
      //   // ...
      // })
      // .catch((error) => {
      //   var errorCode = error.code
      //   var errorMessage = error.message
      // })
    }

    // SET - signInWithAuthUI
    var signInWithAuthUI = function() {
      ui.start(getAuthUIElement(), {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult) {
            if (authResult.user) {
              handleSignedInUser(authResult.user)
            }
            // Do not redirect.
            return false
          },
        },
        signInFlow: 'popup',
        // signInSuccessUrl: '/tabs/appointment',
        signInOptions: [
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // requireDisplayName: false
          },
          // 
          // 2. Email Link Authentication
          // {
          //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          //   signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
          //   forceSameDevice: false,
          // },
          // 
          // 3. Phone Authentication
          // {
          //   provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          //   defaultCountry: 'KR',
          //   // loginHint: '+8201012345678',
          //   forceSameDevice: false,
          // }
        ],
      })
    }

    // SET - signOut
    var signOut = function() {
      firebase.auth().signOut().then(function() {
      }).catch(function() {
        alert('signOut failed')
      })
    }

    // Displays the UI for a signed in user.
    var handleSignedInUser = function() {
      removeAuthUIElement()
    }

    // Displays the UI for a signed out user.
    // var handleSignedOutUser = function() {
    //   signInWithAuthUI()
    // }

    // Deletes the user's account.
    var deleteAccount = function() {
      firebase.auth().currentUser.delete().catch(function(error) {
        if (error.code == 'auth/requires-recent-login') {
          // The user's credential is too old. She needs to sign in again.
          firebase.auth().signOut().then(function() {
            // The timeout allows the message to be displayed after the UI has
            // changed to the signed out state.
            setTimeout(function() {
              alert('Please sign in again to delete your account.');
            }, 1)
          })
        }
      })
    }
    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////


    //////////////////////////////////////////
    // DATABASE //////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////

    // SET - database
    var database = firebase.database()

    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////

    //////////////////////////////////////////
    // STORAGE //////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////

    // SET - database
    var storage = firebase.storage()

    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    //////////////////////////////////////////
    
    let fb = {
      firebase,
      database,
      storage,
      auth: {
        signUp,
        signIn,
        signInWithAuthUI,
        signOut,
        deleteAccount,
        getUser: function () {
          return firebase.auth().currentUser
        },
      },
    }
    Vue.prototype.$firebase = fb
    Vue.firebase = fb
  }
}

export default FirebasePlugin
