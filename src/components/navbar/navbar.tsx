import React, { useState, useRef, useEffect } from "react";
import { NavbarContainer, Profile, Title, Bulb } from "./styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useHistory } from "react-router";
import { Avatar, makeStyles } from "@material-ui/core";
import { Authenticate } from "../../store/reducers/auth";

const useStyles = makeStyles({
  menu: {
    backgroundColor: "#002B6B",
    color: "white",
    marginTop: "4px",
    padding: "0px 10px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#294580",
    },
  },
  items: {
    fontSize: "20px",
    fontWeight: "bold",
  },
});

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const anchorRef: any = React.useRef(null);
  const dispatch = useDispatch();
  const [token, name, email, photo]: any = useSelector((state: RootState) => {
    return [
      state.auth.idtoken,
      state.auth.profile.name,
      state.auth.profile.email,
      state.auth.profile.photo,
    ];
  });

  const handleToggle = () => {
    setopen((prevOpen) => !prevOpen);
  };

  const handleClose = (e: any) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }

    setopen(false);
  };

  const DirectToHome = () => {
    history.push("/home");
  };

  return (
    <NavbarContainer>
      <Title onClick={DirectToHome}>
        Solvi
        <Bulb />
        easY
      </Title>
      <Profile
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar src={photo} />
        {/* <Name>{name?.substr(0, name.indexOf(" "))}</Name> */}
      </Profile>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  className={classes.menu}
                >
                  <MenuItem
                    className={classes.items}
                    onClick={() => dispatch(Authenticate(false))}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </NavbarContainer>
  );
};

export default Navbar;
