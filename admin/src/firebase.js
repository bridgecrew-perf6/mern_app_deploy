// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage, ref } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBdYWVmsMzEWxH5eYfRuuNCrDjGJgTDXWU',
  authDomain: 'netflix-e99f9.firebaseapp.com',
  projectId: 'netflix-e99f9',
  storageBucket: 'netflix-e99f9.appspot.com',
  messagingSenderId: '966122405932',
  appId: '1:966122405932:web:c538a3a783583088e61189',
  measurementId: 'G-J3PYDX3CKK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage();

export default storage;
