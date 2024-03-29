import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://my-app-q3mnh.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
