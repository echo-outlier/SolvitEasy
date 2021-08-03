import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const PrimaryColor = "#002B6B";
const SecendoryColor = "#203E6B";
const hoverColor = "#294580";

const Search = styled.input`
  width: 80%;
  display: flex;
  margin: auto;
  margin-top: 20px;
  height: 50px;
  outline: none;
  border: none;
  font-size: 20px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
`;

const AllQuestionSearchbar = (props: any) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Search
        type="text"
        placeholder="Search Your Question"
        value={props.input}
        onChange={(e) => props.setinput(e.target.value)}
      ></Search>
    </div>
  );
};

export default AllQuestionSearchbar;
