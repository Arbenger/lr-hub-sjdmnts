import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { booksRef } from 'services/firebase/admin';
import verifyToken from 'utils/jwt/verifyToken';
import _ from 'lodash';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const { title, description, copies } = decodedToken;
      const dateAdded = Date.now();
      const bookRef = booksRef.doc();
      const copiesRef = bookRef.collection('copies');

      bookRef.set({
         title,
         dateAdded,
         description:
            description || 'There was no description given to this book.',
         statistics: {
            available: parseInt(copies),
            borrowed: 0,
            lost: 0,
         },
      });

      const idOfCopies = await Promise.all(
         Array(parseInt(copies))
            .fill(null)
            .map(async () => {
               const copyRef = copiesRef.doc();

               await copyRef.set({
                  status: 'available',
                  dateAdded,
               });

               return copyRef.id;
            })
      );

      res.json({
         status: 'fulfilled',
         payload: {
            bookId: bookRef.id,
            bookTitle: decodedToken.title,
            idOfCopies,
         },
      });
   } catch (error) {
      res.json({ status: 'rejected', ...error });
   }
};
