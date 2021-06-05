import type { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdmin } from "firebase/admin";

interface NextApiRequestCustom extends NextApiRequest {
  query: {
    userIdToken: string;
    secretAPIAccessKey: string;
  };
}

export default async (req: NextApiRequestCustom, res: NextApiResponse) => {
  try {
    if (req.query.secretAPIAccessKey !== process.env.secretAPIAccessKey)
      throw { message: "Secret API Access Key did not match." };

    const auth = firebaseAdmin.auth();
    const userIdToken = await auth.verifyIdToken(req.query.userIdToken);
    const userRecord = await auth.getUser(userIdToken.uid);

    await auth.deleteUser(userRecord.uid);

    res.status(200).json({ status: "success" });
  } catch (error) {
    res.end(JSON.stringify({ ...error, status: "failure" }));
  }
};
