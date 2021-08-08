import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../navbar/navbar";
import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import {
  TickQuestion,
  SaveAnswer,
  ClearAnswer,
  FetchQuestions,
  CreateUserField,
  SaveQues_Num,
} from "../../store/reducers/question";
import { SetActiveGroupToNull } from "../../store/reducers/group";
import {
  Options,
  Question,
  QuestionContainer,
  SaveButton,
  Div,
  ClearButton,
  Flex,
  Loader,
} from "./styles";
import Searchbar from "./searchbar";
import copy from "copy-to-clipboard";
import { AiFillCopy } from "react-icons/ai";
import { makeStyles } from "@material-ui/styles";
import Topbar from "../navbar/topbar/topbar";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

export const CopyQuestion = (ques: any) => {
  copy(ques);
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: "#fff",
  },
  savebutton: {
    fontWeight: "bold",
    backgroundColor: "#97b3ee",
    "&:hover": {
      backgroundColor: "#bacbf0",
    },
  },
}));

const Home = () => {
  const [search, setsearch] = useState("");

  const [filtered_questions, set_filtered_questions] = useState([]);
  const [percentage, setpercentage]: any = useState(null);
  const [ele, setele]: any = useState(null);

  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const [token, questions, userId, loading, groupname, group_list] =
    useSelector((state: RootState) => {
      return [
        state.auth.idtoken,
        state.ques.questions,
        state.auth.userId,
        state.ques.loading,
        state.group.active_group,
        state.group.group_list,
      ];
    });

  const [input, setInput]: any = useState(
    Object.keys(questions).map((ques: any) => {
      return { [ques.id]: "" };
    })
  );

  useEffect(() => {
    const location = history.location;
    const items: any = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++) {
      const path = location.pathname;
      if (path === items[i].dataset.name) {
        items[i].classList.add("active");
      } else {
        items[i].classList.remove("active");
      }
    }
  }, []);

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token]);

  useEffect(() => {
    if (group_list) {
      let flag: boolean = true;
      group_list.map((group: string) => {
        if (groupname === group) {
          flag = false;
        }
      });
      if (flag) {
        dispatch(SetActiveGroupToNull());
        history.push("/home");
      }
    }

    if (!groupname) {
      history.push("/home");
    }
  }, [groupname, group_list]);

  useEffect(() => {
    dispatch(FetchQuestions(groupname));
  }, []);

  useEffect(() => {
    if (questions) {
      const temp = questions;
      temp.map((question: any) => {
        const answers = question.answers;
        if (userId in answers) {
        } else {
          dispatch(CreateUserField(question.id, userId));
        }
      });
    }
  }, [questions]);

  useEffect(() => {
    const ques: any = [];
    var sar = search.toLowerCase();
    const temp = questions.map((question: any) => {
      let yash_temp: any = { ...question };
      const hello = {
        ...yash_temp,
        question: yash_temp.question.toLowerCase(),
      };
      return hello;
    });
    temp.filter((question: any) => {
      if (question.question.includes(sar)) {
        ques.push(question);
      }
    });
    set_filtered_questions(ques);
  }, [search, questions]);

  useEffect(() => {
    const ques_per = questions.map((ques: any) => {
      const perc = { ...ques.percentage };
      if (perc.a == 0 && perc.b == 0 && perc.c == 0 && perc.d == 0) {
        return false;
      } else {
        return true;
      }
    });
    setpercentage(ques_per);
  }, [questions]);

  const ChangeInputHandler = (e: any, question: any) => {
    setInput({
      [question.id]: e.target.value,
    });
  };

  if (loading) {
    return (
      <Loader>
        <CircularProgress />
      </Loader>
    );
  }

  return (
    <React.Fragment>
      <Navbar />
      <Topbar />
      <Searchbar input={search} setinput={setsearch} />
      <QuestionContainer id="container">
        {filtered_questions ? (
          filtered_questions.map((question: any) => {
            return (
              <React.Fragment key={question.id}>
                <Flex>
                  <Question>
                    <b>Ques {question?.count}:</b> {question.question}{" "}
                    <span>
                      {percentage[question.count - 1] ? (
                        <TiTick className="tick" />
                      ) : (
                        <ImCross className="cross" />
                      )}
                    </span>
                  </Question>
                  <div>
                    <AiFillCopy
                      className="copy-btn"
                      onClick={() => CopyQuestion(question.question)}
                    />
                  </div>
                </Flex>
                <Options
                  checked={question.answers[userId]?.checked.a}
                  saved={question.answers[userId]?.saved.a}
                  onClick={() =>
                    dispatch(
                      TickQuestion({
                        type: "a",
                        id: question.id,
                        userId: userId,
                      })
                    )
                  }
                >
                  <div>
                    <b>A:</b> {question.option.a.value}
                  </div>
                </Options>
                <Options
                  checked={question.answers[userId]?.checked.b}
                  saved={question.answers[userId]?.saved.b}
                  onClick={() =>
                    dispatch(
                      TickQuestion({
                        type: "b",
                        id: question.id,
                        userId: userId,
                      })
                    )
                  }
                >
                  <b>B:</b> {question.option.b.value}
                </Options>
                <Options
                  checked={question.answers[userId]?.checked.c}
                  saved={question.answers[userId]?.saved.c}
                  onClick={() =>
                    dispatch(
                      TickQuestion({
                        type: "c",
                        id: question.id,
                        userId: userId,
                      })
                    )
                  }
                >
                  <b>C:</b> {question.option.c.value}
                </Options>
                <Options
                  checked={question.answers[userId]?.checked.d}
                  saved={question.answers[userId]?.saved.d}
                  onClick={() =>
                    dispatch(
                      TickQuestion({
                        type: "d",
                        id: question.id,
                        userId: userId,
                      })
                    )
                  }
                >
                  <b>D:</b> {question.option.d.value}
                </Options>
                <Div>
                  <div>
                    <SaveButton
                      onClick={(e) =>
                        dispatch(SaveAnswer(questions, question.id, userId))
                      }
                    >
                      Save
                    </SaveButton>
                    <ClearButton
                      onClick={() =>
                        dispatch(ClearAnswer(questions, question.id, userId))
                      }
                    >
                      Clear
                    </ClearButton>
                  </div>

                  <div id="input">
                    <input
                      type="text"
                      name={question.count}
                      value={input[question.id]}
                      onChange={(e) => ChangeInputHandler(e, question)}
                      placeholder="YQN.."
                    />
                    <Button
                      className={classes.savebutton}
                      color="primary"
                      onClick={() =>
                        dispatch(
                          SaveQues_Num(
                            question.id,
                            userId,
                            input?.[question.id]
                          )
                        )
                      }
                    >
                      Save
                    </Button>
                  </div>
                </Div>
              </React.Fragment>
            );
          })
        ) : (
          <div style={{ width: "100%" }}>Add Your Questions</div>
        )}
      </QuestionContainer>
    </React.Fragment>
  );
};

export default Home;
