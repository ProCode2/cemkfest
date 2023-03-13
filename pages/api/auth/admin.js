import { getServerSession } from "next-auth/next";
import { checkAdminAccess } from "../../../utils/auth";
import { authOptions } from "./[...nextauth]";

const handler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (checkAdminAccess(session)) return res.status(200).end();
  else return res.status(403).end();
};

export default handler;
