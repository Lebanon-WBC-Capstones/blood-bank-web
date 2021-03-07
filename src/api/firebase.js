import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAj75VTRgGTqMojMBY5WeZezAcwgW7iKFg',
  authDomain: 'blood-donation-lb-4ddc4.firebaseapp.com',
  databaseURL: 'https://blood-donation-lb-4ddc4-default-rtdb.firebaseio.com',
  projectId: 'blood-donation-lb-4ddc4',
  storageBucket: 'blood-donation-lb-4ddc4.appspot.com',
  messagingSenderId: '627121834055',
  appId: '1:627121834055:web:a0d626b86457dde8e7c962',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
/*const db=firebase.firestore();*/
const db = firebase.database();

export default db;
