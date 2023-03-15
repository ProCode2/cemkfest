export const checkAdminAccess = async () => {
  const response = await fetch("/api/auth/admin");
  return response;
};

export const getProfileData = async () => {
  const response = await fetch("/api/auth/profile");
  const profileData = await response.json();
  return profileData;
};

export const getAllEvents = async () => {
  const response = await fetch("/api/events");
  const events = await response.json();

  return events;
};

export const getEvent = async (eid) => {
  const response = await fetch(`/api/events/all/${eid}`);
  const event = await response.json();

  return event;
};

export const registerForEvent = async (eid) => {
  const response = await fetch(`/api/events/register/${eid}`, {
    method: "PUT",
    credentials: "include",
  });
  return response;
};

export const unregisterFromEvent = async (eid) => {
  const response = await fetch(`/api/events/register/${eid}`, {
    method: "DELETE",
    credentials: "include",
  });
  return response;
};

export const addEvent = async (event) => {
  const response = await fetch(`/api/events`, {
    method: "POST",
    body: JSON.stringify(event),
  });
  return response;
};

export const updateEvent = async (eid, event) => {
  const response = await fetch(`/api/events/all/${eid}`, {
    method: "PUT",
    body: JSON.stringify(event),
  });
  return response;
};

export const deleteEvent = async (eid) => {
  const response = await fetch(`/api/events/all/${eid}`, {
    method: "DELETE",
  });
  return response;
};

export const search = (events, searchText) => {
  if (searchText == "") return events;

  return events.filter((e) =>
    `${Object.values(e.coordinators || {})
      .map((co) => `${co.name}-${co.phone}`)
      .join("-")}-${Object.values(e).join("-").toLocaleLowerCase()}`.includes(
      searchText
    )
  );
};
