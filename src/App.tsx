import React from "react";
import firebase from "./firebase-config";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Routes from "./routes";
import { Logout } from "./store/reducers/auth";
import { useHistory } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // console.log("profile", user?.providerData[0].email);
        const email = user?.providerData[0].email;
      } else {
        // console.log("no user");
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;
