import { unstable_getServerSession } from "next-auth";
import {
  deleteEventById,
  getEventById,
  updateEventById,
} from "../../../../models/events";
import { checkAdminAccess } from "../../../../utils/auth";
import { authOptions } from "../../auth/[...nextauth]";

const handler = async (req, res) => {
  const { eid } = req.query;
  const session = await unstable_getServerSession(req, res, authOptions);
  try {
    if (req.method === "PUT") {
      console.log(session);
      if (!checkAdminAccess(session)) {
        return res.status(403).end();
      }
      const {
        name,
        description,
        category,
        time,
        venue,
        rules,
        coordinators,
        tagline,
      } = JSON.parse(req.body);
      await updateEventById(
        eid,
        name,
        description,
        category,
        time,
        venue,
        rules,
        coordinators,
        tagline
      );
      return res.status(200).end();
    } else if (req.method === "GET") {
      const event = await getEventById(eid);
      if (event === {}) {
        return res.status(404).end();
      } else {
        return res.status(200).json(event);
      }
    } else if (req.method === "DELETE") {
      if (!checkAdminAccess(session)) {
        return res.status(403).end();
      }
      await deleteEventById(eid);
      return res.status(200).end();
    }
    return res.status(404).end();
  } catch (e) {
    console.log(e);
    return res.status(400).end();
  }
};

export default handler;
