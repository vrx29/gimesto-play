import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import styles from "./index.module.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "context/videoContext";
import { AuthProvider } from "context/authContext";
import { HistoryProvider, LikedProvider } from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideoProvider>
      <AuthProvider>
        <LikedProvider>
          <HistoryProvider>
            <Router>
              <App />
            </Router>
          </HistoryProvider>
        </LikedProvider>
      </AuthProvider>
    </VideoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
