import React from "react";
import Navbar from "../navbar/navbar";
import Topbar from "../navbar/topbar/topbar";
import { useEffect } from "react";
import Searchbar from "./searchbar";
import { useSelector } from "react-redux";
import { QuestionContainer, Options, Question, OptionTop } from "./styles";
import { RootState } from "../../store/store";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { find_percentage } from "../percentage/percentage";

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
      const path = location.pathname.slice(1, location.pathname.length);
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
              <Options>
                <OptionTop val={question.percentage.a}>
                  {question.percentage.a != 0 ? question.percentage.a : null}
                  {question.percentage.a != 0 ? "%" : null}
                </OptionTop>
                <b>A:</b> {question.option.a.value}
              </Options>
              <Options>
                <OptionTop val={question.percentage.b}>
                  {question.percentage.b != 0 ? question.percentage.b : null}
                  {question.percentage.b != 0 ? "%" : null}
                </OptionTop>
                <b>B:</b> {question.option.b.value}
              </Options>
              <Options>
                <OptionTop val={question.percentage.c}>
                  {question.percentage.c != 0 ? question.percentage.c : null}
                  {question.percentage.c != 0 ? "%" : null}
                </OptionTop>
                <b>C:</b> {question.option.c.value}
              </Options>
              <Options>
                <OptionTop val={question.percentage.d}>
                  {question.percentage.d != 0 ? question.percentage.d : null}
                  {question.percentage.d != 0 ? "%" : null}
                </OptionTop>
                <b>D:</b> {question.option.d.value}
              </Options>
            </React.Fragment>
          );
        })}
      </QuestionContainer>
    </React.Fragment>
  );
};

export default Answers;
