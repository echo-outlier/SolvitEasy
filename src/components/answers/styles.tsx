import styled from "styled-components";
import { keyframes } from "styled-components";
export { QuestionContainer, Question } from "../home/styles";

interface Props {
  val: any;
}
export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 5px;
`;

export const Options = styled.div`
  margin-top: 10px;
  position: relative;
  width: 100%;
  font-size: 17px;
  background-color: #eee;
  border-radius: 5px;
  padding: 10px 5px;
  z-index: 1;
`;

const animate = keyframes`
  0%{
    width:10%
  }
  100%{
    width:100%;
  }
`;

export const OptionTop = styled.div<Props>`
  font-size: 12px;
  position: absolute;
  height: 100%;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  width: ${(props) => {
    return `${props.val}%`;
  }};
  z-index: -1;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2f0b2;
  /* @keyframes anime {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => {
    return `${props.val}%`;
  }};
    }
  } */
`;

export const Number = styled.div`
  width: 40px;
  padding: 10px 5px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  background-color: #acd3e8;
`;
