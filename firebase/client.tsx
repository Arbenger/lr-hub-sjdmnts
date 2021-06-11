import firebase from 'firebase/app';
import 'firebase/auth';

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
