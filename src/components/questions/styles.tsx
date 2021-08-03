import styled from "styled-components";

const PrimaryColor = "#002B6B";
const SecendoryColor = "#203E6B";
const hoverColor = "#557EE6";
interface Props {
  disable: boolean;
}

export const QuesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 5px;
  width: 80%;
`;

export const Question = styled.div`
  padding: 10px;
  background-color: #fff;
`;
export const Div = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 10px 15px;
  color: white;
  font-size: 20px;
  width: 80px;
  margin-bottom: 50px;
  &:hover {
    cursor: ${(props) => {
      if (props.disable) {
        return "pointer";
      } else {
        return "disable";
      }
    }};
  }
  background-color: ${(props) => {
    if (props.disable) {
      return "#294580";
    } else {
      return "grey";
    }
  }};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  textarea {
    outline: none;
    border: none;
  }
  #question {
    margin-top: 20px;
    width: 80%;
    height: 250px;
    font-size: 25px;
    font-weight: bold;
  }
  #option {
    width: 80%;
    height: 70px;
    font-size: 20px;
    font-weight: 300;
    word-wrap: break-word;
  }
`;
