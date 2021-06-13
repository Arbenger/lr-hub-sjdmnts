import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { accountsRef } from 'services/firebase/admin';
import verifyToken from 'utils/jwt/verifyToken';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const accountDoc = await accountsRef.doc(decodedToken.accountUID).get();

      res.json({
         status: 'fulfilled',
         accountInfo: accountDoc.data(),
      });
   } catch (error) {
      res.json({ status: 'rejected', error });
   }
};
