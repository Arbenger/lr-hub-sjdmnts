import deleteQueryBatch from './deleteQueryBatch';

export default async function deleteCollection(
   db: FirebaseFirestore.Firestore,
   collectionPath: string,
   batchSize: number
) {
   const collectionRef = db.collection(collectionPath);
   const query = collectionRef.orderBy('__name__').limit(batchSize);

   return new Promise((resolve, reject) => {
      deleteQueryBatch(db, query, resolve).catch(reject);
   });
}
