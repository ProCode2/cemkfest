import { getServerSession } from "next-auth/next";
import { getProfileData } from "../../../models/user";
import { authOptions } from "./[...nextauth]";

const handler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);

  if (!session?.user?.id) return res.status(403).end();
  console.log(session.user.id);
  const profileData = await getProfileData(session.user.id);
  console.log(profileData);
  return res.json(profileData);
};

export default handler;
