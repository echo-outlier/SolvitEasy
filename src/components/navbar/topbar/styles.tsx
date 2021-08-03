import styled from "styled-components";

const PrimaryColor = "#002B6B";
const SecendoryColor = "#203E6B";
const hoverColor = "#294580";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Info = styled.div`
  font-size: 14px;
  font-weight: bold;
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 13px;
    height: 13px;
    background-color: #1cd39c;
  }
  #selected {
    background-color: #d0eef4;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  a {
    text-decoration: none;
  }
  div {
    background-color: #3f5e8c;
    color: white;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background-color: ${hoverColor};
      cursor: pointer;
    }
  }
  .active {
    background-color: ${PrimaryColor};
  }
`;
