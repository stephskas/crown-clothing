import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyA63W_iMMrdHB_BPztdX8KsFINaetrjmOw",
    authDomain: "crown-db-23865.firebaseapp.com",
    projectId: "crown-db-23865",
    storageBucket: "crown-db-23865.appspot.com",
    messagingSenderId: "134526281734",
    appId: "1:134526281734:web:6af2a9d04ded6240777b87"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;