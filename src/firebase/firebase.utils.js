import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDO0YtADtZdR8YfmE_TJ44JjxZSmDgCVQc',
  authDomain: 'crwn-db-c5d01.firebaseapp.com',
  projectId: 'crwn-db-c5d01',
  storageBucket: 'crwn-db-c5d01.appspot.com',
  messagingSenderId: '294892317343',
  appId: '1:294892317343:web:551e45cc68d118404810aa',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
