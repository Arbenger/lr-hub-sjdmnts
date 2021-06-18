import { AVAILABLE, FULFILLED, REJECTED } from 'utils/variables';
import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { booksRef, linksRef } from 'services/firebase/admin';
import verifyToken from 'utils/jwt/verifyToken';
import _ from 'lodash';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const { title, description, dateAdded, copies } = decodedToken;

      const bookRef = booksRef.doc();
      const copiesRef = bookRef.collection('copies');

      await bookRef.set({
         title,
         description,
         dateAdded,
         statistics: {
            total: parseInt(copies),
            available: parseInt(copies),
            borrowed: 0,
            lost: 0,
         },
      });

      const array = Array(parseInt(copies)).fill(null);

      const copiesIds = await Promise.all(
         array.map(async () => {
            const copyRef = copiesRef.doc();
            await copyRef.set({
               status: AVAILABLE,
               dateAdded,
            });

            const linkRef = linksRef.doc(copyRef.id);
            await linkRef.set({
               type: 'book-copy',
               id: copyRef.id,
               originId: bookRef.id,
            });

            return copyRef.id;
         })
      );

      res.json({
         status: FULFILLED,
         data: {
            bookId: bookRef.id,
            bookTitle: title,
            copiesIds,
         },
      });
   } catch (error) {
      res.json({ status: REJECTED, ...error });
   }
};
