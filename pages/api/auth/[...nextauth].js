import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

import { firebaseConfig } from "../../../firebase.config";

const clientId =
  process.env.ENVIRONMENT === "production"
    ? process.env.GOOGLE_PROD_CLIENT_ID
    : process.env.GOOGLE_CLIENT_ID;
const clientSecret =
  process.env.ENVIRONMENT === "production"
    ? process.env.GOOGLE_PROD_CLIENT_SECRET
    : process.env.GOOGLE_CLIENT_SECRET;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
  callbacks: {
    // only users with cemk mail can login
    signIn: async ({ user }) => {
      const isAllowedToSignIn = user?.email.includes("@cemk.ac.in");
      return isAllowedToSignIn;
    },
    session: async ({ session, token, user }) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: FirestoreAdapter({
    ...firebaseConfig,
    // emulator: {
    //   host: "localhost",
    //   port: "3001",
    // },
  }),
};

export default NextAuth(authOptions);
