import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import firebase from "../../firebase-config";
import { find_percentage } from "../../components/percentage/percentage";

interface Props {
  questions: any;
  input: any;
  loading: boolean;
}

const initialState: Props = {
  questions: [],
  input: {
    question: "",
    options: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
  },
  loading: false,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    ChangeInput: (state, action) => {
      if (action.payload.type === "question") {
        state.input.question = action.payload.value;
      } else {
        state.input.options[`${action.payload.type}`] = action.payload.value;
      }
    },
    CleanInput: (state) => {
      state.input.question = "";
      state.input.options = {
        a: "",
        b: "",
        c: "",
        d: "",
      };
    },
    OptionError: (state) => {
      alert("Fill All Options");
    },
    StartFetching: (state, action) => {
      state.loading = true;
    },
    Fetchquestions: (state, action) => {
      const temp: any = [];
      if (action.payload) {
        Object.keys(action.payload).map((id, index) => {
          temp.push(action.payload[id]);
          temp[index].id = id;
        });
        state.questions = temp;
      } else {
        state.questions = [];
      }
      state.loading = false;
    },
  },
});

export const CreateUserField = (questionid: any, userId: any): AppThunk => {
  return (dispatch, getState) => {
    const quesRef = firebase
      .database()
      .ref("Groups")
      .child(getState().group.active_group)
      .child(questionid)
      .child("answers");
    quesRef.once("value", (snapshot) => {
      const val = snapshot.val();
      quesRef.update({
        ...val,
        [userId]: {
          checked: {
            a: false,
            b: false,
            c: false,
            d: false,
          },
          saved: {
            a: false,
            b: false,
            c: false,
            d: false,
          },
        },
      });
    });
  };
};

export const TickQuestion = (payload: any): AppThunk => {
  return (dispatch, getState) => {
    const checked_opt = firebase
      .database()
      .ref("Groups")
      .child(getState().group.active_group)
      .child(payload.id)
      .child("answers")
      .child(payload.userId)
      .child("checked");
    let val: any = null;
    checked_opt.once("value", (snapshot) => {
      val = snapshot.val();
      Object.keys(val).map((opt) => {
        if (opt === payload.type) {
          val[opt] = true;
        } else {
          val[opt] = false;
        }
      });
      checked_opt.update({
        ...val,
      });
    });
  };
};

export const Addquestion = (groupname: any): AppThunk => {
  return (dispatch, getState) => {
    const input = getState().ques.input;

    const ques = {
      id: Math.random(),
      count: Object.keys(getState().ques.questions).length + 1,
      question: input.question,
      option: {
        a: { value: input.options.a },
        b: { value: input.options.b },
        c: { value: input.options.c },
        d: { value: input.options.d },
      },
      percentage: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
      },
      number: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
      },
      answers: {
        [getState().auth.userId]: {
          checked: {
            a: false,
            b: false,
            c: false,
            d: false,
          },
          saved: {
            a: false,
            b: false,
            c: false,
            d: false,
          },
        },
      },
    };
    if (
      input.options.a != "" &&
      input.options.b != "" &&
      input.options.c != "" &&
      input.options.d != "" &&
      input.question != ""
    ) {
      const quesRef = firebase.database().ref("Groups").child(groupname);
      quesRef.push(ques);
      dispatch(CleanInput());
    } else {
      dispatch(OptionError());
    }
  };
};

export const FetchQuestions = (groupname: any): AppThunk => {
  return (dispatch) => {
    if (groupname) {
      dispatch(StartFetching(true));
      const quesRef = firebase.database().ref("Groups").child(groupname);
      quesRef.on("value", (snapshot) => {
        const ques = snapshot.val();
        dispatch(Fetchquestions(ques));
      });
    }
  };
};

export const ClearAnswer = (questions: any, id: any, userId: any) => {
  return (dispatch: any, getState: any) => {
    const quesRef = firebase
      .database()
      .ref("Groups")
      .child(getState().group.active_group)
      .child(id)
      .child("answers")
      .child(userId)
      .child("saved");
    const quesRef1 = firebase
      .database()
      .ref("Groups")
      .child(getState().group.active_group)
      .child(id)
      .child("answers")
      .child(userId)
      .child("checked");
    let val: any = null;
    const options = {
      a: false,
      b: false,
      c: false,
      d: false,
    };
    quesRef.update({
      ...options,
    });
    quesRef1.update({
      ...options,
    });

    const all_ques = find_percentage(getState().ques.questions);
    const ques: any = all_ques.filter((question) => {
      if (question.id === id) {
        return question;
      }
    });

    const perc = { ...ques[0].percentage };

    const ques_percentage = firebase
      .database()
      .ref("Groups")
      .child(getState().group.active_group)
      .child(id)
      .child("percentage");
    ques_percentage.update({
      ...perc,
    });
  };
};

export const SaveAnswer = (questions: any, id: any, userId: any): AppThunk => {
  return (dispatch, getState) => {
    let opt: any = null;
    const groupname = getState().group.active_group;

    const checked_opt = firebase
      .database()
      .ref("Groups")
      .child(groupname)
      .child(id)
      .child("answers")
      .child(userId)
      .child("checked");
    const saved_opt = firebase
      .database()
      .ref("Groups")
      .child(groupname)
      .child(id)
      .child("answers")
      .child(userId)
      .child("saved");

    checked_opt.once("value", (snapshot) => {
      const val = snapshot.val();
      Object.keys(val).map((option) => {
        if (val[option]) {
          opt = option;
        }
      });
      const ans_options = {
        a: "a" === opt,
        b: "b" === opt,
        c: "c" === opt,
        d: "d" === opt,
      };
      saved_opt.update({
        ...ans_options,
      });
      checked_opt.update({
        ...ans_options,
        a: false,
        b: false,
        c: false,
        d: false,
      });
    });

    const all_ques = find_percentage(getState().ques.questions);
    const ques: any = all_ques.filter((question) => {
      if (question.id === id) {
        return question;
      }
    });

    const perc = { ...ques[0].percentage };

    const ques_percentage = firebase
      .database()
      .ref("Groups")
      .child(groupname)
      .child(id)
      .child("percentage");
    ques_percentage.update({
      ...perc,
    });
  };
};

export const SaveQues_Num = (id: any, userId: any, number: any): AppThunk => {
  return (dispatch, getState) => {
    const ques_num = firebase
      .database()
      .ref("Groups")
      .child(getState().group.active_group)
      .child(id)
      .child("answers")
      .child(userId)
      .child("ques_num");
    ques_num.update({
      number,
    });
  };
};

export const {
  Fetchquestions,
  ChangeInput,
  CleanInput,
  OptionError,
  StartFetching,
} = questionSlice.actions;
export default questionSlice.reducer;
