import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const isDevelopment = process.env.NODE_ENV === 'development';

if (!firebase.apps.length) {
   firebase.initializeApp({
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
      storageBucket: isDevelopment
         ? 'default-bucket'
         : process.env.storageBucket,
   });
}

export const firebaseClient = firebase;
export const authClient = firebase.auth();
export const dbClient = firebase.firestore();
export const storageClient = firebase.storage();

if (isDevelopment) {
   try {
      // @ts-ignore
      authClient.useEmulator('http://localhost:9099', {
         disableWarnings: true,
      });
   } catch (error) {
      authClient.useEmulator('http://localhost:9099');
   }
   dbClient.useEmulator('localhost', 8080);
   storageClient.useEmulator('localhost', 9199);
}

export const storageRef = storageClient.ref();
