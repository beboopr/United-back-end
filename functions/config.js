//Required? double check!!
const firebase=require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyDGIJZ4RbDXMlA0qSZv_xB41Qto6HZmuSo",
    authDomain: "united-project-c8.firebaseapp.com",
    projectId: "united-project-c8",
    storageBucket: "united-project-c8.appspot.com",
    messagingSenderId: "536458967385",
    appId: "1:536458967385:web:5e051f13dd299acf147448"
  };
  firebase.initializeApp(firebaseConfig)
  const db=firebase.firestore()