importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

// Get a Firestore instance
const config = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FCM_SENDER_ID,
  authDomain: "dokument-a66ff.firebaseapp.com",
  databaseURL: "https://dokument-a66ff.firebaseio.com",
  projectId: "dokument-a66ff",
  storageBucket: "dokument-a66ff.appspot.com",
  messagingSenderId: "1072446603694",
  appId: "1:1072446603694:web:878ef82b994df408d5883f",
  measurementId: "G-XJ8RRD9NEK",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  // Customize notification here
  const notificationTitle = payload.data.fcm_title; 
  const notificationOptions = {
    body: payload.data.fcm_body,
    icon: './static/favicon1.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
