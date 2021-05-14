import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBa-IxbFP-NyRb-OKVkq_4es6Ld7YD_0Z8",
    authDomain: "disneyplus-clone-1437e.firebaseapp.com",
    projectId: "disneyplus-clone-1437e",
    storageBucket: "disneyplus-clone-1437e.appspot.com",
    messagingSenderId: "522519337432",
    appId: "1:522519337432:web:0201f650c63695e704baad",
    measurementId: "G-FB4XKSZK0E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export{ auth, provider, storage};
  export default db;
