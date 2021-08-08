import styled from "styled-components";
import { HiLightBulb } from "react-icons/hi";

const PrimaryColor = "#002B6B";
const SecendoryColor = "#203E6B";
const hoverColor = "#294580";
export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  background-color: ${PrimaryColor};
  color: white;
`;

export const Title = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Palette+Mosaic&family=Roboto+Slab&display=swap");
  font-size: 28px;
  font-weight: 800;
  margin-left: 12px;
  font-family: "Roboto Slab", serif;
  &:hover {
    cursor: pointer;
    svg {
      fill: #28d223;
    }
  }
`;

export const Bulb = styled(HiLightBulb)``;

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

export const Profile = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-right: 12px;
  &:hover{
    cursor: pointer;
  }
`;

export const Name = styled.div`
  color: white;
  font-size: 20px;
  margin-left: 10px;
`;
