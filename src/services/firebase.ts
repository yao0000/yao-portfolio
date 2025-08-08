import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuG50Dk1dv-hWa8hDyifrHiGQWC5ooseo",
  authDomain: "portfolio-a5340.firebaseapp.com",
  projectId: "portfolio-a5340",
  storageBucket: "portfolio-a5340.firebasestorage.app",
  messagingSenderId: "604554923536",
  appId: "1:604554923536:web:20b50c4261b0c4f9294495"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/*
if (import.meta.env.DEV) {
  //connectFirestoreEmulator(db, "localhost", 8080);
}*/

export const loadDoc = async (collection: string, id: string) => {
  const docRef = doc(db, collection, id);
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

export const loadDocs = async (strCollection: string) => {
  try {
    const snapshot = await getDocs(collection(db, strCollection));
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return data;
  } catch (e) {
    console.error(e);
  }
  return [];
}
