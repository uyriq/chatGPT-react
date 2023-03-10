import { getAuth } from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { initializeApp } from 'firebase/app'
import { getRemoteConfig, getValue } from "firebase/remote-config";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const remoteConfig = getRemoteConfig(app);
const auth = getAuth(app)
const firestore = getFirestore(app)

const appConfig = {
  serverBaseUrl: `${getValue(remoteConfig, "API_SERVER_BASE_URL")}` || process.env.SERVER_BASE_URL
}

console.log(`--- ${JSON.stringify(appConfig.serverBaseUrl) }  ???  ${process.env.SERVER_BASE_URL}`)

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(firestore, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


export { firebaseConfig, appConfig, app, auth, firestore, }
