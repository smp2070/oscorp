import firebase from 'firebase';
import config from '../config.json';

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;