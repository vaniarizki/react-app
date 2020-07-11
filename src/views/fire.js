import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBldXW0IvoFqukXvlnnsyXJNeDNfuYsl0I",
  authDomain: "myfinalproject22.firebaseapp.com",
  databaseURL: "https://myfinalproject22.firebaseio.com",
  projectId: "myfinalproject22",
  storageBucket: "myfinalproject22.appspot.com",
  messagingSenderId: "113820924053",
  appId: "1:113820924053:web:4c22e8aea919af25c0439c"
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;