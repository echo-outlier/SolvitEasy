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
import { CircularProgress } from "@material-ui/core";
import { Loader } from "../home/styles";
import { sha256 } from "js-sha256";

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
  const [token, loading, profile] = useSelector((state: RootState) => {
    return [state.auth.idtoken, state.auth.loading, state.auth.profile];
  });
  const history = useHistory();
  useEffect(() => {
    if (token) {
      // const hash = sha256.create();
      // hash.update(profile.email);
      // const userId = hash.hex();
      // document.cookie = `userId=${userId}`;
      //@ts-ignore
      // window.dataLayer.push({ event: "login", username: "yash" });
      history.push("/home");
    }
  }, []);

  if (loading) {
    return (
      <Loader>
        <CircularProgress />
      </Loader>
    );
  }
  return (
    <React.Fragment>
      <Div>
        <Card className={classes.root}>
          <Button
            variant="contained"
            className={`${classes.button} login_btn`}
            endIcon={<FcGoogle>send</FcGoogle>}
            onClick={() => dispatch(Authenticate(true))}
          >
            Login With Google
          </Button>
        </Card>
      </Div>
    </React.Fragment>
  );
};

export default Login;
