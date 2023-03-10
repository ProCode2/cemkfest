import { addEvent, getAllEvents } from "../../../models/events";
import { checkAdminAccess } from "../../../utils/auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req, res) => {
  try {
    if (req.method == "GET") {
      const session = await getServerSession(req, res, authOptions);
      console.log(session);
      let entriesData = await getAllEvents();
      res.status(200).json(entriesData);
    } else if (req.method == "POST") {
      const session = await getServerSession(req, res, authOptions);
      console.log(session);
      if (!checkAdminAccess(session)) {
        res.status(403).end();
        return;
      }
      console.log(req.body);
      const {
        name,
        description,
        time,
        venue,
        category,
        rules,
        coordinators,
        tagline,
      } = JSON.parse(req.body);
      const id = await addEvent(
        name,
        description,
        category,
        venue,
        time,
        rules,
        coordinators,
        tagline
      );
      res.status(200).json({ id });
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

export default handler;
