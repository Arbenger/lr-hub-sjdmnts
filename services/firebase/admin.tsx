import firebaseAdmin from 'firebase-admin';
import serviceAccount from './secret.json';

if (!firebaseAdmin.apps.length) {
   firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
         privateKey: serviceAccount.private_key,
         clientEmail: serviceAccount.client_email,
         projectId: serviceAccount.project_id,
      }),
      databaseURL: 'https://lr-hub-sjdmnts.firebaseio.com',
   });
}

export { firebaseAdmin };

export const auth = firebaseAdmin.auth();
export const db = firebaseAdmin.firestore();

// DB COLLECTIONS
export const usersRef = db.collection('users');
export const booksRef = db.collection('books');
export const linksRef = db.collection('links');
