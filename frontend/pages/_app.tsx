import "../styles/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { SessionProvider } from "next-auth/react";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
  headers: {
    //nie powinno byc next public
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <div className="main-background">
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </SessionProvider>
  );
}
