import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { options } from "./[...nextauth]";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //@ts-ignore
  const session = await unstable_getServerSession(req, res, options);
  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
