import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

import { firebaseConfig } from "../../../firebase.config";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
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
