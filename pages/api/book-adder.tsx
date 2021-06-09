import type { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdmin } from "firebase/admin";
import { mapAsync } from "lodasync";
import _ from "lodash";

interface NextApiRequestCustom extends NextApiRequest {
  query: {
    title: string;
    description: string;
    copies: string;
    dateAdded: string;
    secretAPIAccessKey: string;
  };
}

export default async (req: NextApiRequestCustom, res: NextApiResponse) => {
  try {
    if (req.query.secretAPIAccessKey !== process.env.secretAPIAccessKey)
      throw { message: "Secret API Access Key did not match." };

    const { title, description, copies, dateAdded } = req.query;
    const db = firebaseAdmin.firestore();
    const bookDoc = db.collection("books").doc();

    bookDoc.set({
      title,
      description,
      dateAdded,
    });

    const copiesIds = await mapAsync(async () => {
      const copyDoc = bookDoc.collection("copies").doc();

      await copyDoc.set({
        status: "availables",
        dateAdded,
      });

      return copyDoc.id;
    }, Array(parseInt(copies)).fill(1));

    res.status(200).json({
      status: "success",
      copiesIds,
    });
  } catch (error) {
    res.end(JSON.stringify({ ...error, status: "failure" }));
  }
};
