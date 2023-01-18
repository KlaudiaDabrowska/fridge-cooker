import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { post } from "../../../config/strapiClient";

export const options = (
  req: NextApiRequest,
  res: NextApiResponse
): NextAuthOptions => {
  return {
    providers: [
      CredentialsProvider({
        type: "credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },

        async authorize(credentials, req) {
          const user = {
            indetifier: credentials?.email,
            password: credentials?.password,
          };

          if (user.indetifier && user.password) {
            const { data: authResponse } = await post("/auth/local", user);
            return authResponse;
          } else {
            return null;
          }
        },
      }),
    ],
    pages: {
      signIn: "/login",
    },
  };
};

const Auth = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options(req, res));
};

export default Auth;
