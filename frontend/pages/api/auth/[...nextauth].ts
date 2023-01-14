import Providers from "next-auth/providers";
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
        name: "Sign in with Email",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        //@ts-ignore
        async authorize(credentials, req) {
          if (credentials == null) return null;

          try {
            const loginResult = await post("/auth/local", credentials);
            return loginResult;
          } catch (e) {
            throw new Error("Invalid credentials");
          }
        },
      }),
    ],
    callbacks: {
      session: async ({ session, token }) => {
        session.id = token.id;
        session.jwt = token.jwt;
        return Promise.resolve(session);
      },
      jwt: async ({ token, user }) => {
        const isSignIn = user ? true : false;
        if (isSignIn) {
          token.id = user.id;
          token.jwt = user.jwt;
        }
        return Promise.resolve(token);
      },
    },
  };
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options(req, res));

export default Auth;
