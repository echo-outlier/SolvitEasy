import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import firebase from "../../firebase-config";
import { setConstantValue } from "typescript";
import { stat } from "fs";
interface Props {
  idtoken: any;
  userId: any;
  profile: any;
  loading: any;
}

const initialState: Props = {
  idtoken: null,
  userId: null,
  profile: {
    name: null,
    email: null,
    photo: null,
  },
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Login: (state, action) => {
      window.location.replace("/SolvitEasy/home");
      state.profile.name = action.payload.profile[0].displayName;
      state.profile.email = action.payload.profile[0].email;
      state.profile.photo = action.payload.profile[0].photoURL;
      state.idtoken = action.payload.token;
      state.userId = action.payload.userid;
    },
    Logout: (state) => {
      localStorage.removeItem("persist:root");
      state = { ...initialState };
      window.location.replace("/");
    },
    SetLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const Authenticate = (flag: boolean): AppThunk => {
  return async (dispatch) => {
    if (flag) {
      await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((res: any) => {
          dispatch(SetLoading(true));
          if (res.user) {
            dispatch(
              Login({
                profile: res.user.providerData,
                token: res.credential.idToken,
                userid: res.user.uid,
              })
            );
          }
          dispatch(SetLoading(false));
        })
        .catch((error) => {});
    } else {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          dispatch(Logout());
        })
        .catch((error) => console.log(error));
    }
  };
};

export const { Login, Logout, SetLoading } = authSlice.actions;
export default authSlice.reducer;
