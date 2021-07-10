import firebase from 'firebase';
const firebaseConfig = {
    apiKey: 'AIzaSyDj-futDr86IJt0XdMWWt81SApTxKMPRT0',
    authDomain: 'my-doctor-bwa-b2fb2.firebaseapp.com',
    projectId: 'my-doctor-bwa-b2fb2',
    storageBucket: 'my-doctor-bwa-b2fb2.appspot.com',
    messagingSenderId: '708387551352',
    appId: '1:708387551352:web:0222c82da6fa3bb5af958d',
    measurementId: 'G-KYE3SQP7RM',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Fire = firebase;

export default Fire;
