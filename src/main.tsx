import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./libs/client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./libs/utils/env.ts";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
