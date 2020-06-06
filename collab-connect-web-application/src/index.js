import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/frameworks/normalize.css";
import "./css/webpages/index.css";
import App from "./js/components/App";
import * as serviceWorker from "./js/other/serviceWorker";
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAu7m_yOxsLapML0gabBU-tEIEF3xFqU0k",
  authDomain: "collab-connect.firebaseapp.com",
  databaseURL: "https://collab-connect.firebaseio.com",
  projectId: "collab-connect",
  storageBucket: "collab-connect.appspot.com",
};

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCGxO1ZcPpq7YE8YTNbbYYAwtwqsXWYstM",
  authDomain: "collab-connect-b6358.firebaseapp.com",
  databaseURL: "https://collab-connect-b6358.firebaseio.com",
  projectId: "collab-connect-b6358",
  storageBucket: "collab-connect-b6358.appspot.com",
  messagingSenderId: "793236351163",
  appId: "1:793236351163:web:e40f09a799d781a253a19e",
  measurementId: "G-ZR04XQ31R9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
