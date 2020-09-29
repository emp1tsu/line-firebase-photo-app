import firebase from "firebase/app";
import "firebase/database";

export const db = firebase
  .initializeApp({ databaseURL: process.env.VUE_APP_DATABASE_URL })
  .database();
