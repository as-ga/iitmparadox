import GoogleProvider from "next-auth/providers/google";
// import { AuthOptions, ISODateString, User } from "next-auth";
import { NextAuthOptions } from "next-auth";
import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/models/user.model";
// import { JWT } from "next-auth/jwt";

// export type CustomSession = {
//   user?: CustomUser;
//   expires: ISODateString;
// };

// export type CustomUser = {
//   id?: string | null;
//   name?: string | null;
//   email?: string | null;
//   role?: string | null;
//   avatar?: string | null;
// };

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
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

// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"

// export const { handlers, auth, signIn, signOut } = NextAuth({

//   providers: [

//     GoogleProvider({
//             clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
//           })
//   ],
// })

// import GoogleProvider from "next-auth/providers/google";
// import { AuthOptions, ISODateString, User } from "next-auth";
// import { JWT } from "next-auth/jwt";

// import { User as UserModel } from "@/models/user.model";
// import { dbConnect } from "@/database/mongo";

// export type CustomSession = {
//   user?: CustomUser;
//   expires: ISODateString;
// };

// export type CustomUser = {
//   id?: string | null;
//   name?: string | null;
//   email?: string | null;
//   role?: string | null;
//   avatar?: string | null;
// };

// export const authOptions: AuthOptions = {
/* pages: {
    signIn: "/login",
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
          role: "User",
        });
        return true;
      } catch (error) {
        console.log("The error is 444444444444 ", error);
        return false;
      }
    },

    async jwt({ token, user }: { token: JWT; user: CustomUser }) {
      if (user) {
        user.role = user?.role == null ? "User" : user?.role;
        token.user = user;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: JWT;
      user: User;
    }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },*/
//   providers: [
//     GoogleProvider({
//       clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
// };

/*
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
});*/
