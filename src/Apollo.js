import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";
  import { BrowserRouter } from "react-router-dom";
  import App from "./App";
  
  const Apollo = () => {
    const client = new ApolloClient({
      // uri: "https://48p1r2roz4.sse.codesandbox.io",
      uri: "http://localhost:4000/",
      cache: new InMemoryCache(),
    });
  
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    );
  };
  
  export default Apollo;
  