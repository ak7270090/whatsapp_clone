import firebase from 'firebase';
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
//import { initializeApp } from "firebase/app";
//import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDbjxyGG5hNxXobwT7FdXU0GkzANxW73bU",
    authDomain: "whatsapp-clone-c3ec2.firebaseapp.com",
    projectId: "whatsapp-clone-c3ec2",
    storageBucket: "whatsapp-clone-c3ec2.appspot.com",
    messagingSenderId: "469847289507",
    appId: "1:469847289507:web:874ac4b5a8eb1e3d521916"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;