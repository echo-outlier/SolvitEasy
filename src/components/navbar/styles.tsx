import styled from "styled-components";

const PrimaryColor = "#002B6B";
const SecendoryColor = "#203E6B";
const hoverColor = "#294580";
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
  width: 100%;
  background-color: ${PrimaryColor};
`;
export const NavbarItem = styled.div`
  margin: 5px;
  color: white;
  font-size: 20px;
  background-color: ${SecendoryColor};
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  &:hover {
    background-color: ${hoverColor};
    cursor: pointer;
  }
`;
