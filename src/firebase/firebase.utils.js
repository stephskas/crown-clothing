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

firebase.initializeApp(config)
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const auth = firebase.auth()
export const firestore = firebase.firestore()


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

    try {
        await userRef.set({
            displayName,
            email, 
            createdAt,
            ...additionalData
        })
    } catch (error) {
        console.log('error creating user', error.message)
    }
  }
  console.log(snapShot)
  return userRef;
}





export default firebase;