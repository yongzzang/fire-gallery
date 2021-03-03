import firebase from 'firebase/app';
import 'firebase/storage'; /*모든 이미지 저장소*/
import 'firebase/firestore';

 //Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDwl9JhSP5w51Qo4P0vNup9T2WWsegRBPs",
    authDomain: "react-firebase-c7ade.firebaseapp.com",
    projectId: "react-firebase-c7ade",
    storageBucket: "react-firebase-c7ade.appspot.com",
    messagingSenderId: "187720164055",
    appId: "1:187720164055:web:f99e65fcdf2abe77b60692"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };