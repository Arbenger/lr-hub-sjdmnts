import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { booksRef, db } from 'services/firebase/admin';
import deleteCollection from 'utils/firestore/deleteCollection';
import verifyToken from 'utils/jwt/verifyToken';
import _ from 'lodash';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const { title } = decodedToken;

      const snapshot = await booksRef.where('title', '==', title).get();

      snapshot.forEach(async (doc) => {
         await deleteCollection(db, `books/${doc.id}/copies`, 10);
         booksRef.doc(doc.id).delete();
      });

      res.json({ status: 'fulfilled' });
   } catch (error) {
      res.json({ status: 'rejected', ...error });
   }
};
