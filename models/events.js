import db from "../utils/db";

export const getAllEvents = async () => {
  const eventsDoc = await db.collection("events").get();
  const events = eventsDoc.docs.map((event) => ({
    id: event.id,
    ...event.data(),
  }));
  return events;
};

export const addEvent = async (
  name,
  description,
  category,
  venue,
  time,
  rules,
  coordinators,
  tagline
) => {
  const { id } = await db.collection("events").add({
    name,
    description,
    category,
    venue,
    time,
    rules,
    coordinators,
    tagline,
    created: new Date().toISOString(),
  });
  return id;
};

export const getEventsByCategory = async (category) => {
  const eventsDoc = await db
    .collection("events")
    .where("category", "==", category)
    .get();
  const events = eventsDoc.docs.map((event) => ({
    id: event.id,
    ...event.data(),
  }));
  return events;
};

export const updateEventById = async (
  eid,
  name,
  description,
  category,
  time,
  venue,
  rules,
  coordinators,
  tagline
) => {
  const data = await db.collection("events").doc(eid).update({
    name,
    description,
    category,
    time,
    venue,
    rules,
    coordinators,
    tagline,
    updated: new Date().toISOString(),
  });
  return data;
};

export const getEventById = async (eid) => {
  const doc = await db.collection("events").doc(eid).get();
  if (!doc.exists) {
    return {};
  } else {
    return { id: doc.id, ...doc.data() };
  }
};

export const deleteEventById = async (eid) => {
  await db.collection("events").doc(eid).delete();
};
