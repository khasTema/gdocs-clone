
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAS8P_aOgp4CTPDzXmfSBJiCFZ7X3Nfr9M",
  authDomain: "gdocs-clone-fdcf1.firebaseapp.com",
  projectId: "gdocs-clone-fdcf1",
  storageBucket: "gdocs-clone-fdcf1.appspot.com",
  messagingSenderId: "643294980777",
  appId: "1:643294980777:web:522b2a9aec3aaea3e8d7b8",
  measurementId: "G-D73CEQ84PR"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
