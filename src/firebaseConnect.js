const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBHnEjcIidiYdV7_P9IUA2ePJzcQ3vmX1o",
    authDomain: "notelist-aa064.firebaseapp.com",
    databaseURL: "https://notelist-aa064.firebaseio.com",
    projectId: "notelist-aa064",
    storageBucket: "notelist-aa064.appspot.com",
    messagingSenderId: "753738116457"
  };

  firebase.initializeApp(config);
  export const noteData = firebase.database().ref('dataForNote');
 