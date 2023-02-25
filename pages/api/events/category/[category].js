import { getEventsByCategory } from "../../../../models/events";

const handler = async (req, res) => {
  const { category } = req.query;
  if (
    ![
      "Robotics",
      "Coding",
      "Speak Up",
      "Entertainment",
      "Innovation",
      "Brain Games",
      "Gaming",
    ].includes(category)
  ) {
    return res.status(200).json([]);
  }
  try {
    let entriesData = await getEventsByCategory(category);
    res.status(200).json(entriesData);
  } catch (e) {
    res.status(400).end();
  }
};

export default handler;