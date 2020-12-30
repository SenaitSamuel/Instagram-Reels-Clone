import firebase from 'firebase/app';
import 'firebase/firestore';   // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyCfQp1JoQr4bjdq9ejr1l4I29r1zObOsls",
  authDomain: "instagram-reels-clone-1a998.firebaseapp.com",
  databaseURL: "https://instagram-reels-clone-1a998-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "instagram-reels-clone-1a998",
  storageBucket: "instagram-reels-clone-1a998.appspot.com",
  messagingSenderId: "712700454513",
  appId: "1:712700454513:web:cb074c833877896b865dd0"
};
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;