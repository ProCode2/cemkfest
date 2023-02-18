import { unstable_getServerSession } from "next-auth";
import { getProfileData } from "../../../models/user";
import { authOptions } from "./[...nextauth]";

export default handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session?.user?.id) return res.status(403).end();
  console.log(session.user.id);
  const profileData = await getProfileData(session.user.id);
  console.log(profileData);
  return res.json(profileData);
};
