import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { usersRef, auth } from 'services/firebase/admin';
import verifyToken from 'utils/jwt/verifyToken';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const { uid } = decodedToken;

      await auth.deleteUser(uid);
      await usersRef.doc(uid).delete();

      res.json({ status: 'fulfilled' });
   } catch (error) {
      res.json({ status: 'rejected', ...error });
   }
};
