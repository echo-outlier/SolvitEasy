import React from "react";
import Navbar from "../navbar/navbar";
import Topbar from "../navbar/topbar/topbar";
import { useEffect } from "react";
import Searchbar from "./searchbar";
import { useSelector } from "react-redux";
import {
  QuestionContainer,
  OptionContainer,
  Options,
  Question,
  OptionTop,
  Number,
} from "./styles";
import { Flex } from "../home/styles";
import { RootState } from "../../store/store";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { find_percentage } from "../percentage/percentage";
import { AiFillCopy } from "react-icons/ai";
import { CopyQuestion } from "../home/home";

const calcPercent = (number: any, percentage: any) => {
  const result = number / percentage;
  return parseFloat(result.toFixed(2));
};

const Answers = () => {
  const [search, setsearch] = useState("");
  const [filtered_questions, set_filtered_questions]: any = useState([]);
  const history = useHistory();
  const [questions, userId] = useSelector((state: RootState) => {
    return [state.ques.questions, state.auth.userId];
  });

  useEffect(() => {
    if (!userId) {
      history.push("/");
    }
  }, [userId]);

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
    set_filtered_questions((prevstate: any) => {
      let all_ques = [...questions];

      var newques = find_percentage(questions);
      var sar = search.toLowerCase();
      const temp = newques.map((question: any) => {
        let yash_temp: any = { ...question };
        const hello = {
          ...yash_temp,
          question: yash_temp.question.toLowerCase(),
        };
        return hello;
      });
      const final_ques = temp.filter((question: any) => {
        if (question.question.includes(sar)) {
          return question;
        }
      });
      return [...final_ques];
    });
  }, [search, questions]);

  return (
    <React.Fragment>
      <Navbar />
      <Topbar />
      <Searchbar input={search} setInput={setsearch} />
      <QuestionContainer>
        {filtered_questions.map((question: any) => {
          return (
            <React.Fragment key={question.id}>
              <Flex>
                <Question>
                  <b>
                    Ques{" "}
                    {question.answers[userId].ques_num
                      ? question.answers[userId].ques_num.number
                      : null}
                    :
                  </b>{" "}
                  {question.question}
                </Question>
                <OptionContainer>
                  <AiFillCopy
                    className="copy-btn"
                    onClick={() => CopyQuestion(question.question)}
                  />
                </OptionContainer>
              </Flex>

              <OptionContainer>
                <Options>
                  <div>
                    <b>A:</b> {question.option.a.value}
                  </div>
                  <OptionTop val={question.percentage.a}></OptionTop>
                </Options>
                {question.number.a ? (
                  <Number>{question.number.a}</Number>
                ) : null}
              </OptionContainer>

              <OptionContainer>
                <Options>
                  <div>
                    <b>B:</b> {question.option.b.value}
                  </div>
                  <OptionTop val={question.percentage.b}></OptionTop>
                </Options>
                {question.number.b ? (
                  <Number>{question.number.b}</Number>
                ) : null}
              </OptionContainer>

              <OptionContainer>
                <Options>
                  <div>
                    <b>C:</b> {question.option.c.value}
                  </div>
                  <OptionTop val={question.percentage.c}></OptionTop>
                </Options>
                {question.number.c ? (
                  <Number>{question.number.c}</Number>
                ) : null}
              </OptionContainer>

              <OptionContainer>
                <Options>
                  <div>
                    <b>D:</b> {question.option.d.value}
                  </div>
                  <OptionTop val={question.percentage.d}></OptionTop>
                </Options>
                {question.number.d ? (
                  <Number>{question.number.c}</Number>
                ) : null}
              </OptionContainer>
            </React.Fragment>
          );
        })}
      </QuestionContainer>
    </React.Fragment>
  );
};

export default Answers;
