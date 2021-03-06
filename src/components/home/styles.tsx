import styled from "styled-components";
import { keyframes } from "styled-components";

const PrimaryColor = "#002B6B";
const SecendoryColor = "#203E6B";
const hoverColor = "#294580";

interface options {
  checked: any;
  saved: any;
}

export const QuestionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 100px;
  background-color: white;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    .copy-btn {
      font-size: 50px;
      padding: 10px;
      &:hover {
        cursor: pointer;
        background-color: #c6c6c6;
        border-radius: 50%;
      }
    }
  }
`;

export const Question = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  width: 100%;
  span {
    position: relative;
    width: 50px;
    height: 50px;
    .tick {
      font-size: 25px;
      color: green;
    }
    .cross {
      font-size: 15px;
      fill: red;
    }
  }
`;

const animate = keyframes`
  0%{
    width:10%
  }
  100%{
    width:100%;
  }
`;
export const Options = styled.div<options>`
  margin-top: 10px;
  position: relative;
  font-size: 17px;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.saved == true) {
      return "#75d9a6";
    } else if (props.checked == true) {
      return "#d0eef4;";
    } else {
      return "#eee";
    }
  }};
  border-radius: 5px;
  word-wrap: break-word;
  &:hover {
    cursor: pointer;
  }
`;

export const AddButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PrimaryColor};
  color: white;
  font-size: 20px;
  border-radius: 50%;
  &:hover {
    background-color: #294580;
    cursor: pointer;
  }
`;

export const SaveButton = styled.div`
  margin-top: 20px;
  padding: 10px;
  padding-left: 11px;
  background-color: ${PrimaryColor};
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: #485a82;
    cursor: pointer;
  }
`;

export const ClearButton = styled(SaveButton)``;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #input {
    margin-top: 20px;
    div {
      background-color: #97b3ee;
      padding: 10px;
      margin-right: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    input {
      font-size: 15px;
      height: 30px;
      width: 40px;
      border: none;
      outline: none;
      padding: 2px;
      border: 1px solid grey;
    }
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
