import React from "react";
import { ApolloProvider } from "@apollo/client";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import Search from "./components/Search";
import Shortener from "./components/Shortener";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Shortener />
      <Search />
    </ApolloProvider>
  );
}

export default App;
