import { unstable_getServerSession } from "next-auth/next";
import {
  userRegisterInEvent,
  userUnregisterFromEvent,
} from "../../../../models/user";
import { checkUserLoggedIn } from "../../../../utils/auth";
import { authOptions } from "../../auth/[...nextauth]";

const handler = async (req, res) => {
  const { eid } = req.query;

  const session = await unstable_getServerSession(req, res, authOptions);
  if (!checkUserLoggedIn(session)) {
    return res.status(403).end();
  }

  try {
    if (req.method === "PUT") {
      console.log("here");
      await userRegisterInEvent(session.user.id, eid);
      return res.status(200).end();
    } else if (req.method === "DELETE") {
      await userUnregisterFromEvent(session.user.id, eid);
      return res.status(200).end();
    }

    return res.status(404).end();
  } catch (e) {
    console.log(e);
    return res.status(400).end();
  }
};

export default handler;
