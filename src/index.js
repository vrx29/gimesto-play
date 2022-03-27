import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "context/videoContext";
import { AuthProvider } from "context/authContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideoProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </VideoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
