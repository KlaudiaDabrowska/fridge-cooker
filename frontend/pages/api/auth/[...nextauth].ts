import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { DefaultUser, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { post, strapiClient } from "../../../config/strapiClient";

interface AuthorizeResponse {
  jwt: string;
  user: DefaultUser;
}

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
            identifier: credentials?.email,
            password: credentials?.password,
          };

          if (user.identifier && user.password) {
            const { data: authResponse } =
              await strapiClient.post<AuthorizeResponse>("/auth/local", user);
            console.log("AUTH RESPONSE", authResponse.user);
            return authResponse.user;
          } else {
            return null;
          }
        },
      }),
    ],
    // callbacks: {
    //   jwt: async ({ token, account, user }) => {
    //     // Persist the OAuth access_token to the token right after signin
    //     console.log("TOKEN: " + JSON.stringify(token));
    //     console.log("ACCOUNT w jwt: " + JSON.stringify(account));
    //     console.log("USER w jwt: " + JSON.stringify(user));

    //     if (account && user) {
    //       // token.accessToken = account.access_token;
    //       // token.email = user.email;
    //     }
    //     return token;
    //   },
    //   session: async ({ session, token }) => {
    //     console.log("SESJA");
    //     console.log(session);

    //     console.log("TOKEN w sesji");
    //     console.log(token);

    //     console.log("USER w sesji");

    //     // session.user.email = token.email;

    //     return session;
    //   },
    // },
    pages: {
      signIn: "/login",
    },
  };
};

const Auth = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options(req, res));
};

export default Auth;
