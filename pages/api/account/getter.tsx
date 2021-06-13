import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'services/firebase/admin';
import jwt from 'jsonwebtoken';

interface NextApiRequestCustom extends NextApiRequest {
   query: {
      token: string;
   };
}

export default async (req: NextApiRequestCustom, res: NextApiResponse) => {
   try {
      const decodedToken = jwt.verify(
         req.query.token,
         process.env.secretAPIAccessKey
      ) as any;
      const { accountUID } = decodedToken;

      const accountRef = db.collection('accounts').doc(accountUID);
      const accountDoc = await accountRef.get();

      res.json({
         status: 'fulfilled',
         accountInfo: accountDoc.data(),
      });
   } catch (error) {
      res.json({
         status: 'rejected',
         error,
         ...req.query,
      });
   }
};
