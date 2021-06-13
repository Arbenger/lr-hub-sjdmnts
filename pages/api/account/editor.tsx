import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { accountsRef } from 'services/firebase/admin';
import verifyToken from 'utils/jwt/verifyToken';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const { accountUID, displayName, occupation } = decodedToken;
      const accountRef = accountsRef.doc(accountUID);

      await accountRef.update({
         displayName,
         occupation,
      });

      res.json({ status: 'fulfilled' });
   } catch (error) {
      res.json({ status: 'rejected', error });
   }
};
