import * as firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCRNIaylINEfY0yg7IhoVzNI0F428MkBow",
    authDomain: "myprojectvuejs-ea69a.firebaseapp.com",
    databaseURL: "https://myprojectvuejs-ea69a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myprojectvuejs-ea69a",
    storageBucket: "myprojectvuejs-ea69a.appspot.com",
    messagingSenderId: "237364527640",
    appId: "1:237364527640:web:964214f0fe6fac0f24f96d",
    measurementId: "G-R37BEGQ018"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase  