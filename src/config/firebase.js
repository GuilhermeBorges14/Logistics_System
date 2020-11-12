import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlijSmfWWCPtmDSmIQT_mRyA6bYoG_5Oc",
    authDomain: "logistics-system-e8dff.firebaseapp.com",
    databaseURL: "https://logistics-system-e8dff.firebaseio.com",
    projectId: "logistics-system-e8dff",
    storageBucket: "logistics-system-e8dff.appspot.com",
    messagingSenderId: "528346107725",
    appId: "1:528346107725:web:fddc160489acb6f8db7104"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);