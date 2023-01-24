
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBAFAfMYF9dp-Xj5tDV_U2BNveFz3Z2YCM",
  authDomain: "tickets-eb29b.firebaseapp.com",
  projectId: "tickets-eb29b",
  storageBucket: "tickets-eb29b.appspot.com",
  messagingSenderId: "709612613535",
  appId: "1:709612613535:web:30f6e82efda425287417aa",
  measurementId: "G-3DQ7RDDV2Y"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };;