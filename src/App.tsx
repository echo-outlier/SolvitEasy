import React from "react";
import firebase from "./firebase-config";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Routes from "./routes";
import { Logout } from "./store/reducers/auth";
import { useHistory } from "react-router-dom";
import { sha256 } from "js-sha256";

function App() {
  const hash = sha256.create();
  hash.update("vs.doce@gmail.com");
  const userId = hash.hex();
  document.cookie = `userId=${userId}`;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        const email = user?.providerData[0].email;
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
