import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { usersRef } from 'services/firebase/admin';
import verifyToken from 'utils/jwt/verifyToken';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const { uid, displayName, occupation } = decodedToken;
      const userRef = usersRef.doc(uid);

      await userRef.update({
         displayName,
         occupation,
      });

      res.json({ status: 'fulfilled' });
   } catch (error) {
      res.json({ status: 'rejected', error });
   }
};
