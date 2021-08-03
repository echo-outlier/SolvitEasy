import styled from "styled-components";
export { QuestionContainer, Question } from "../home/styles";

interface Props {
  val: any;
}

export const Options = styled.div`
  margin-top: 10px;
  position: relative;
  font-size: 17px;
  background-color: #eee;
  border-radius: 5px;
`;
export const OptionTop = styled.div<Props>`
  font-size: 12px;
  margin-bottom: 5px;
  height: 20px;
  width: ${(props) => {
    return `${props.val}%`;
  }};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
`;
