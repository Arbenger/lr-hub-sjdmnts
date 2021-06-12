import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from 'firebase/admin';

interface NextApiRequestCustom extends NextApiRequest {
   query: {
      accountUID: string;
      secretAPIAccessKey: string;
   };
}

export default async (req: NextApiRequestCustom, res: NextApiResponse) => {
   try {
      if (req.query.secretAPIAccessKey !== process.env.secretAPIAccessKey)
         throw { message: 'Secret API Access Key did not match.' };

      const { accountUID } = req.query;

      await auth.deleteUser(accountUID);

      res.status(200).json({ status: 'fulfilled' });
   } catch (error) {
      res.end(JSON.stringify({ ...error, status: 'rejected' }));
   }
};
