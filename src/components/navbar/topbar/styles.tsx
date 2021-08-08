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
  gap: 10px;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  --webkit-user-select: none;
  svg {
    font-size: 30px;
    --webkit-user-select: none;
    &:hover {
      fill: ${PrimaryColor};
    }
  }
`;

export const Info = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  .inside-info {
    display: inline-flex;
    justify-content: center;
    margin-right: 5px;
    width: 25px;
    height: 25px;
    background-color: #75d9a6;
    gap: 5px;
  }
  .badge {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }
  #selected {
    background-color: #d0eef4;
  }
  .tick {
    color: green !important;
    font-size: 30px !important;
  }
  .cross {
    color: red !important;
    font-size: 30px !important;
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
