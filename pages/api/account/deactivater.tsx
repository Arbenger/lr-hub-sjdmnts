import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { accountsRef, auth } from 'services/firebase/admin';
import verifyToken from 'utils/jwt/verifyToken';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);

      await auth.deleteUser(decodedToken.accountUID);
      await accountsRef.doc(decodedToken.accountUID).delete();

      res.json({ status: 'fulfilled' });
   } catch (error) {
      res.json({ status: 'rejected', ...error });
   }
};
