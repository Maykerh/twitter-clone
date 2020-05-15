import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
