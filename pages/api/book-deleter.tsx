import type { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAdmin } from '../../firebase/admin';
import _ from 'lodash';

interface NextApiRequestCustom extends NextApiRequest {
   query: {
      title: string;
      dateAdded: string;
      secretAPIAccessKey: string;
   };
}

async function deleteCollection(db, collectionPath, batchSize) {
   const collectionRef = db.collection(collectionPath);
   const query = collectionRef.orderBy('__name__').limit(batchSize);

   return new Promise((resolve, reject) => {
      deleteQueryBatch(db, query, resolve).catch(reject);
   });
}

async function deleteQueryBatch(db, query, resolve) {
   const snapshot = await query.get();

   const batchSize = snapshot.size;
   if (batchSize === 0) {
      // When there are no documents left, we are done
      resolve();
      return;
   }

   // Delete documents in a batch
   const batch = db.batch();
   snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
   });
   await batch.commit();

   // Recurse on the next process tick, to avoid
   // exploding the stack.
   process.nextTick(() => {
      deleteQueryBatch(db, query, resolve);
   });
}

export default async (req: NextApiRequestCustom, res: NextApiResponse) => {
   try {
      if (req.query.secretAPIAccessKey !== process.env.secretAPIAccessKey)
         throw { message: 'Secret API Access Key did not match.' };

      const { title, dateAdded } = req.query;
      const db = firebaseAdmin.firestore();
      const books = db.collection('books');

      const snapshot = await books
         .where('title', '==', title)
         .where('dateAdded', '==', dateAdded)
         .get();

      snapshot.forEach((doc) => {
         deleteCollection(db, `books/${doc.id}/copies`, 10).then(() => {
            books.doc(doc.id).delete();
         });
      });

      res.status(200).json({
         status: 'success',
      });
   } catch (error) {
      res.end(JSON.stringify({ ...error, status: 'failure' }));
   }
};
