import type { NextApiRequest, NextApiResponse } from 'next';
import { accountsRef, auth } from 'firebase/admin';
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

      await auth.deleteUser(decodedToken.accountUID);

      await accountsRef.doc(decodedToken.accountUID).delete();

      res.status(200).json({ status: 'fulfilled' });
   } catch (error) {
      res.end(JSON.stringify({ status: 'rejected', ...error }));
   }
};
