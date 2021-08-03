import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { ChangeInput, Addquestion } from "../../store/reducers/question";
import { Div } from "./styles";
import { Question, QuesContainer } from "./styles";
import styled from "styled-components";
import Topbar from "../navbar/topbar/topbar";
import { useHistory } from "react-router-dom";
const Newques = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [questions, question, options, token] = useSelector(
    (state: RootState) => {
      return [
        state.ques.questions,
        state.ques.input.question,
        state.ques.input.options,
        state.auth.idtoken,
      ];
    }
  );
  const [disable, setdisable] = useState(false);
  const [filtered_questions, set_filtered_questions] = useState([]);

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token]);

  useEffect(() => {
    const location = history.location;
    const items: any = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++) {
      const path = location.pathname.slice(1, location.pathname.length);
      if (path === items[i].dataset.name) {
        items[i].classList.add("active");
      } else {
        items[i].classList.remove("active");
      }
    }
  }, []);

  useEffect(() => {
    const ques: any = [];
    var sar = question.toLowerCase();
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
    if (ques.length === 0) {
      setdisable((prevstate) => true);
    } else setdisable((prevstate) => false);
    set_filtered_questions(ques);
  }, [question, questions]);
  const InputChangeHandler = (e: any) => {
    dispatch(ChangeInput({ type: e.target.name, value: e.target.value }));
  };

  return (
    <React.Fragment>
      <Navbar />
      <Topbar />
      <Container>
        <textarea
          name="question"
          placeholder="Type Your Question Here"
          id="question"
          value={question}
          onChange={(e) => InputChangeHandler(e)}
        />
        <QuesContainer>
          {filtered_questions.map((question: any) => {
            return (
              <React.Fragment key={question.id}>
                <Question>
                  <b>Ques {question?.count}:</b> {question.question}
                </Question>
              </React.Fragment>
            );
          })}
        </QuesContainer>
        {Object.keys(options).map((option) => {
          return (
            <textarea
              key={option}
              name={option}
              placeholder={"Option" + option.toUpperCase()}
              id="option"
              value={options[option]}
              onChange={(e) => InputChangeHandler(e)}
            />
          );
        })}
        {disable ? (
          <Div
            disable={disable}
            id="btn"
            onClick={() => dispatch(Addquestion())}
          >
            Save
          </Div>
        ) : (
          <Div disable={disable} id="btn">
            Save
          </Div>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Newques;
