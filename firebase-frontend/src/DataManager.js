import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZodedzYBbp24NQWcX_wo9f3QEUl2Q7D0",

  authDomain: "fir-starwars-1e69c.firebaseapp.com",

  projectId: "fir-starwars-1e69c",

  storageBucket: "fir-starwars-1e69c.appspot.com",

  messagingSenderId: "401951293447",

  appId: "1:401951293447:web:d35d851befe2e60299eaa2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getPeople = async () => {
  const querySnapshot = await getDocs(collection(db, "people")); //saját firestore-ban létrehozott adabázisnév
  const people = [];
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    people.push(doc.data());
  });

  return people;
};

export const addPerson = async (name, height, mass) => {
  try {
    const docRef = await addDoc(collection(db, "people"), {
      name, //ez ugyanaz mint a name: name,
      height,
      mass,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
