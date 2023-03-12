export const checkAdminAccess = (session) => {
  return (
    process.env.SITE_ADMINS.split(",").includes(session?.user?.email) ||
    session?.user?.email === "it2019@cemk.ac.in"
  );
};

export const checkUserLoggedIn = (session) => {
  console.log(session);
  return session !== null && session.user !== null;
};
