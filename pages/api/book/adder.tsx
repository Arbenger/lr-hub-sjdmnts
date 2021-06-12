import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'firebase/admin';
import { mapAsync } from 'lodasync';
import _ from 'lodash';

interface NextApiRequestCustom extends NextApiRequest {
   query: {
      title: string;
      description: string;
      copies: string;
      secretAPIAccessKey: string;
   };
}

export default async (req: NextApiRequestCustom, res: NextApiResponse) => {
   try {
      if (req.query.secretAPIAccessKey !== process.env.secretAPIAccessKey)
         throw { message: 'Secret API Access Key did not match.' };

      const { title, description, copies } = req.query;
      const bookRef = db.collection('books').doc();

      bookRef.set({
         title,
         dateAdded: new Date().getTime(),
         description:
            description || 'There is no description given to this book.',
      });

      const idOfCopies = await mapAsync(async () => {
         const copyRef = bookRef.collection('copies').doc();

         await copyRef.set({
            status: 'availables',
            dateAdded: new Date().getTime(),
         });

         return copyRef.id;
      }, Array(parseInt(copies)).fill(1));

      res.status(200).json({
         status: 'fulfilled',
         bookId: bookRef.id,
         bookTitle: title,
         idOfCopies,
      });
   } catch (error) {
      res.end(JSON.stringify({ ...error, status: 'rejected' }));
   }
};
