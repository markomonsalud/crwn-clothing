import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyDjUFMV_IuJrEsQWNJxPSL46SWk79NBV4s",
    authDomain: "crown-db-41b6b.firebaseapp.com",
    databaseURL: "https://crown-db-41b6b.firebaseio.com",
    projectId: "crown-db-41b6b",
    storageBucket: "crown-db-41b6b.appspot.com",
    messagingSenderId: "506318037628",
    appId: "1:506318037628:web:a7475c4062647dcfaddff9",
    measurementId: "G-QF70E3SZ1M"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;