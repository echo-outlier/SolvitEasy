import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import firebase from "../../firebase-config";

interface Props {
  group_list: any;
  active_group: any;
  active_user_groups: null;
  error: string;
  error1: string;
  perror: string;
  loading: boolean;
}

const initialState: Props = {
  group_list: null,
  active_group: null,
  active_user_groups: null,
  error: "",
  error1: "",
  perror: "",
  loading: false,
};

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    Fetchgroup: (state, action) => {
      state.group_list = action.payload;
    },
    GroupVerified: (state, action) => {
      state.active_group = action.payload;
      window.location.replace("/SolvitEasy/home/questions");
    },
    SetErrortoNull: (state) => {
      state.error = "";
    },
    SetPwdErrortoNull: (state) => {
      state.error1 = "";
    },
    SetError: (state, action) => {
      state.error = action.payload;
    },
    SetPwdError: (state, action) => {
      state.error1 = action.payload;
    },
    SetLoading: (state, action) => {
      state.loading = action.payload;
    },
    SetInitialState: (state) => {
      state.group_list = null;
      state.active_group = null;
      state.error = "";
      state.perror = "";
      state.loading = false;
    },
    SetActiveUserGroups: (state, action) => {
      state.active_user_groups = action.payload;
    },
    SetActiveGroupToNull: (state) => {
      state.active_group = null;
    },
  },
});

export const FetchGroupsInfo = (): AppThunk => {
  return (dispatch) => {
    dispatch(SetLoading(true));
    const groupsRef = firebase.database().ref("Groups").child("Info");
    groupsRef.on("value", (snapshot) => {
      const groups = snapshot.val();
      if (groups) {
        const all_groups_name = Object.keys(groups);
        dispatch(Fetchgroup(all_groups_name));
      } else {
        dispatch(SetInitialState());
      }
      dispatch(SetLoading(false));
    });
  };
};

export const FetchUserGroups = (user: string): AppThunk => {
  return (dispatch) => {
    const groupsRef1 = firebase
      .database()
      .ref("Groups")
      .child("Users")
      .child(user);
    groupsRef1.on("value", (snapshot) => {
      const user_groups = snapshot.val();
      if (user_groups) {
        const temp = Object.keys(user_groups).map(
          (group) => user_groups[group]
        );
        dispatch(SetActiveUserGroups(temp));
      }
    });
  };
};

export const CreateNewGroup = (
  Name: any,
  Password: any,
  user: any,
  callback: any
): AppThunk => {
  return (dispatch) => {
    if (Name === "") {
      dispatch(SetError("Can't leave the field empty"));
    } else if (Password === "") {
      dispatch(SetPwdError("Can't leave the field empty"));
    } else {
      const groupsRef = firebase.database().ref("Groups").child("Info");
      const groupsRef1 = firebase
        .database()
        .ref("Groups")
        .child("Users")
        .child(user);
      groupsRef.once("value", (snapshot) => {
        const groups_info = snapshot.val();
        if (groups_info && Name in groups_info) {
          dispatch(SetError("Group Name already Exists"));
          callback(true);
        } else {
          groupsRef.update({
            ...groups_info,
            [Name]: Password,
          });
          groupsRef1.once("value", (snap) => {
            const user_groups = snap.val();
            if (user_groups) {
              groupsRef1.push(Name);
            } else {
              groupsRef1.push(Name);
            }
          });
          callback(false);
        }
      });
    }
  };
};

export const EnterGroup = (groupname: string, password: any): AppThunk => {
  return (dispatch) => {
    const groupsRef = firebase.database().ref("Groups").child("Info");
    groupsRef.once("value", (snapshot) => {
      const all_group = snapshot.val();
      Object.keys(all_group).map((group) => {
        if (group === groupname) {
          if (password === all_group[groupname]) {
            dispatch(GroupVerified(groupname));
          } else {
            dispatch(SetError("Incorrect Password"));
          }
        }
      });
    });
  };
};

export const DeleteGroup = (groupname: any, user: string): AppThunk => {
  return (dispatch) => {
    const groupsRef = firebase.database().ref(`/Groups/Info/${groupname}`);
    groupsRef.once("value", (snap) => {
      groupsRef.remove();
    });
    const groupsRef1 = firebase.database().ref(`/Groups/Users/${user}`);
    groupsRef1.once("value", (snapshot) => {
      const val = snapshot.val();
      let group_id: any = null;
      Object.keys(snapshot.val()).map((group) => {
        if (val[group] === groupname) {
          group_id = group;
        }
      });
      groupsRef1.child(group_id).remove();
    });
    const groupRef2 = firebase.database().ref(`Groups/${groupname}`);
    groupRef2.once("value", (snapshot) => {
      const val = snapshot.val();
      if (val) {
        groupRef2.remove();
      }
    });
  };
};

export const {
  Fetchgroup,
  SetError,
  SetPwdError,
  SetPwdErrortoNull,
  SetErrortoNull,
  SetLoading,
  GroupVerified,
  SetInitialState,
  SetActiveUserGroups,
  SetActiveGroupToNull,
} = groupSlice.actions;

export default groupSlice.reducer;
