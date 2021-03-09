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

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
