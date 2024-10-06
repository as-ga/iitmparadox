import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/models/user.model";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/profile",
  },

  callbacks: {
    async signIn({ user }) {
      dbConnect();
      try {
        const findUser = await UserModel.findOne({ email: user.email });
        if (findUser) {
          return true;
        }
        await UserModel.create({
          email: user.email,
          name: user.name,
          avatar: user.image,
          role: "User",
        });
        return true;
      } catch (error) {
        console.log("The error is :", error);
        return false;
      }
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
