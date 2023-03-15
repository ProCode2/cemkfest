import db from "../utils/db";
import { getEventById } from "./events";

const addUserInfo = async (uid, participation) => {
  const { id } = await db.collection("user_info").add({
    userId: uid,
    participation: { [participation]: participation },
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  });
  return id;
};

export const userRegisterInEvent = async (uid, eid) => {
  if (!uid) return;

  const userDoc = await db
    .collection("user_info")
    .where("userId", "==", uid)
    .get();

  if (!userDoc.empty) {
    // add eid to participation array
    const user = userDoc.docs[0];
    if (user.exists) {
      const userData = user.data();
      await db
        .collection("user_info")
        .doc(user.id)
        .update({
          ...userData,
          participation: { ...userData.participation, [eid]: eid },
          updated: new Date().toISOString(),
        });

      return user.id;
    }
  } else {
    // create new entry for user with eid in participation array
    const id = await addUserInfo(uid, eid);
    return id;
  }
};

export const userUnregisterFromEvent = async (uid, eid) => {
  const userDoc = await db
    .collection("user_info")
    .where("userId", "==", uid)
    .get();

  if (!userDoc.empty) {
    // add eid to participation array
    const user = userDoc.docs[0];
    if (user.exists) {
      const userData = user.data();
      delete userData.participation[eid];
      await db
        .collection("user_info")
        .doc(user.id)
        .update({
          ...userData,
          updated: new Date().toISOString(),
        });

      return user.id;
    }
  }
};

export const getUserRegisteredEvents = async (uid) => {
  const userDoc = await db
    .collection("user_info")
    .where("userId", "==", uid)
    .get();

  if (!userDoc.empty) {
    // add eid to participation array
    const user = userDoc.docs[0];
    if (user.exists) {
      const userData = user.data();
      let events = [];
      Object.keys(userData.participation).forEach(async (eid) => {
        const event = await getEventById(eid);
        if (event) events.push(event);
      });
      return events;
    }
  } else {
    return [];
  }
};

export const getProfileData = async (uid) => {
  const events = await getUserRegisteredEvents(uid);
  const user = await db.collection("users").doc(uid).get();
  console.log(user.data());
  return {
    user: { id: user.id, ...user.data() },
    registeredEvents: events,
  };
};
