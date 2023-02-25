import { unstable_getServerSession } from "next-auth";
import { checkAdminAccess } from "../../../utils/auth";
import { authOptions } from "./[...nextauth]";

const handler = async (req, res) => {
  const session = unstable_getServerSession(req, res, authOptions);
  if (checkAdminAccess(session)) return res.status(200).end();
  else return res.redirect("/");
};

export default handler;