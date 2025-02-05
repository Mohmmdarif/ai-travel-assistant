import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GRAPHQL_URL } from "./utils/env";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
});

const link = from([errorLink, new HttpLink({ uri: GRAPHQL_URL })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default client;
