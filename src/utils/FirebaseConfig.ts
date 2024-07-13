import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection, getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyADzQYc3YQUhyYrKIFuSJJf4457A3aWlUA",
  authDomain: "pokedex-2e69f.firebaseapp.com",
  projectId: "pokedex-2e69f",
  storageBucket: "pokedex-2e69f.appspot.com",
  messagingSenderId: "944738860116",
  appId: "1:944738860116:web:8b364c16193c5fed2ec1c1",
  measurementId: "G-L27P5Z8846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);


export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");