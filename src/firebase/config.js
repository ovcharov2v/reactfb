import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAUPW9YQj9QwVDu3AU0IxBlNK7Gwg_ofqs",
  authDomain: "shdev-9478d.firebaseapp.com",
  projectId: "shdev-9478d",
  storageBucket: "shdev-9478d.appspot.com",
  messagingSenderId: "77717233192",
  appId: "1:77717233192:web:6c0e646595c4509940df1d"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, db, timestamp };