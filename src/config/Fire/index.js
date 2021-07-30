import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAHCfDt2uUk-GXw3qYz5TKtSGrWgYR-aGE',
  authDomain: 'development-3a3c3.firebaseapp.com',
  databaseURL: 'https://development-3a3c3-default-rtdb.firebaseio.com',
  projectId: 'development-3a3c3',
  storageBucket: 'development-3a3c3.appspot.com',
  messagingSenderId: '419741298777',
  appId: '1:419741298777:web:05b08313c48dc0e13fc148',
  measurementId: 'G-80BN4HXE1J',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Fire = firebase;

export default Fire;
