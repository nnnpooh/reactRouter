import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD8HkOMlBIM0zYHhIYwDBEXW5-o1QJ__y4',
  authDomain: 'nakornping-2ee45.firebaseapp.com',
  databaseURL: 'https://nakornping-2ee45-default-rtdb.firebaseio.com',
  projectId: 'nakornping-2ee45',
  storageBucket: 'nakornping-2ee45.appspot.com',
  messagingSenderId: '1079265511490',
  appId: '1:1079265511490:web:bdd3bed129d500ec6785db',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
