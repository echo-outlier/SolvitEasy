import React from "react";
import { NavbarContainer, NavbarItem } from "./styles";
import { useDispatch } from "react-redux";
import { Authenticate } from "../../store/reducers/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useHistory } from "react-router";
const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [token, name, email, photo]: any = useSelector((state: RootState) => {
    return [
      state.auth.idtoken,
      state.auth.profile.name,
      state.auth.profile.email,
      state.auth.profile.photo,
    ];
  });
  const home = () => {
    history.push("/home");
  };
  const ans = () => {
    history.push("/answers");
  };
  const ques = () => {
    history.push("/addques");
  };
  return (
    // <OuterNavContainer>
    <NavbarContainer>
      <NavbarItem onClick={() => dispatch(Authenticate(false))}>
        Logout
      </NavbarItem>
    </NavbarContainer>
    // </OuterNavContainer>
  );
};

export default Navbar;
