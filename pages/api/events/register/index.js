import { unstable_getServerSession } from "next-auth/next";
import { getUserRegisteredEvents } from "../../../../models/user";
import { checkUserLoggedIn } from "../../../../utils/auth";
import { authOptions } from "../../auth/[...nextauth]";

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (checkUserLoggedIn(session)) {
    res.status(403).end();
  }

  try {
    if (req.method === "GET") {
      const events = await getUserRegisteredEvents(session.user.id);
      res.status(200).json(events);
    }

    res.status(404).end();
  } catch (e) {
    res.status(400).end();
  }
};

export default handler;
