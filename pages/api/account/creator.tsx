import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { usersRef, auth } from 'services/firebase/admin';
import verifyToken from 'utils/jwt/verifyToken';

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const { uid } = decodedToken;
      const userRecord = await auth.getUser(uid);
      const userRef = usersRef.doc(uid);
      const userDoc = await userRef.get();

      if (userDoc.exists) throw 'User already exists!';

      await userRef.set({
         uid,
         email: userRecord.email,
         displayName: userRecord.displayName,
         occupation: 'Unknown',
         registeredAt: userRecord.metadata.creationTime,
         photoURL: userRecord.photoURL,
         provider: userRecord.providerData[0].providerId,
      });

      res.json({ status: 'fulfilled' });
   } catch (error) {
      res.json({ status: 'rejected', error });
   }
};
