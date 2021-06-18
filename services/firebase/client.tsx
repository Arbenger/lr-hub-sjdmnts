import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

if (!firebase.apps.length) {
   firebase.initializeApp({
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
   });
}

export const firebaseClient = firebase;
export const authClient = firebase.auth();
export const storageClient = firebase.storage();
export const storageRef = storageClient.ref();
