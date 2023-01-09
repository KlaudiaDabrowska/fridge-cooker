import "../styles/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
  headers: {
    //nie powinno byc next public
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_JWT}`,
  },
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="main-background">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
