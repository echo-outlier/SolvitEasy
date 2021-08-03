import React from "react";
import { Container, MainContainer, InfoContainer, Info } from "./styles";
import { Link } from "react-router-dom";
import { template } from "@babel/core";
import { useEffect } from "react";
const Topbar = () => {
  return (
    <MainContainer>
      <Container>
        <Link to="/home">
          <div data-name="home" className="item active">
            All Question
          </div>
        </Link>
        <Link to="/answers">
          <div data-name="answers" className="item">
            All Answers
          </div>
        </Link>
        <Link to="/addques">
          <div data-name="addques" className="item">
            Add Question
          </div>
        </Link>
      </Container>
      <InfoContainer>
        <Info>
          <span id="selected"></span> Selected Option
        </Info>
        <Info>
          <span></span> Ticked Option
        </Info>
      </InfoContainer>
    </MainContainer>
  );
};

export default Topbar;
