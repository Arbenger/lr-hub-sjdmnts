export default async function deleteQueryBatch(
   db: FirebaseFirestore.Firestore,
   query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData>,
   resolve: any
) {
   const snapshot = await query.get();

   const batchSize = snapshot.size;
   if (batchSize === 0) {
      resolve();
      return;
   }

   const batch = db.batch();
   snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
   });
   await batch.commit();

   process.nextTick(() => {
      deleteQueryBatch(db, query, resolve);
   });
}
