import firebase from 'firebase';
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
//import { initializeApp } from "firebase/app";
//import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;