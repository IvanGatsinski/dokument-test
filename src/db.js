import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: "dokument-a66ff.firebaseapp.com",
    databaseURL: "https://dokument-a66ff.firebaseio.com",
    projectId: "dokument-a66ff",
    storageBucket: "dokument-a66ff.appspot.com",
    messagingSenderId: "1072446603694",
    appId: "1:1072446603694:web:878ef82b994df408d5883f",
    measurementId: "G-XJ8RRD9NEK"
  })
  .firestore();

  export const storage = firebase.storage();

 