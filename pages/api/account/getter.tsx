import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { usersRef } from 'services/firebase/admin';
import axios from 'axios';
import signToken from 'utils/jwt/signToken';
import verifyToken from 'utils/jwt/verifyToken';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const { uid } = decodedToken;
      const userRef = usersRef.doc(uid);
      const userDoc = await userRef.get();

      res.json({
         status: 'fulfilled',
         payload: userDoc.data(),
      });
   } catch (error) {
      res.json({ status: 'rejected', error });
   }
};
