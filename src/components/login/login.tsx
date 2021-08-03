import React from "react";
import { Authenticate } from "../../store/reducers/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../store/store";
import { useHistory } from "react-router-dom";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { Backdrop, CircularProgress } from "@material-ui/core";

const PrimaryColor = "#002B6B";
const SecendoryColor = "#203E6B";
const hoverColor = "#294580";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing(1),
    fontWeight: "bolder",
    color: "white",
    backgroundColor: PrimaryColor,
    "&:hover": {
      backgroundColor: hoverColor,
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    opacity: 0.5,
  },
}));

const Div = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
`;

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [token, loading] = useSelector((state: RootState) => {
    return [state.auth.idtoken, state.auth.loading];
  });
  const history = useHistory();
  useEffect(() => {
    if (token) {
      history.push("/home");
    }
  }, []);
;

  return (
    <React.Fragment>
      {/* {loading ? (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : ( */}
      <Div>
        <Card className={classes.root}>
          <Button
            variant="contained"
            className={classes.button}
            endIcon={<FcGoogle>send</FcGoogle>}
            onClick={() => dispatch(Authenticate(true))}
          >
            Login With Google
          </Button>
        </Card>
      </Div>
      {/* )} */}

      {/* <NavbarContainer>
        <NavbarItem onClick={() => dispatch(Authenticate(true))}>
          Login
        </NavbarItem>
      </NavbarContainer> */}
    </React.Fragment>
  );
};

export default Login;
