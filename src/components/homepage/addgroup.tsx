import React, { useState } from "react";
import { TextField, Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";
import Fade from "@material-ui/core/Fade";
import {
  CreateNewGroup,
  SetErrortoNull,
  SetPwdErrortoNull,
} from "../../store/reducers/group";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const PrimaryColor = "#002B6B";
const hoverColor = "#294580";

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const GroupTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
`;

const useStyles = makeStyles((theme) => ({
  name: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: PrimaryColor,
    color: "white",
    "&:hover": {
      backgroundColor: hoverColor,
    },
  },
}));

const Addgroup = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [input, setinput] = useState({
    groupname: "",
    password: "",
  });

  const [error, error1, user] = useSelector((state: RootState) => {
    return [state.group.error, state.group.error1, state.auth.userId];
  });

  const CreateGroup = () => {
    dispatch(CreateNewGroup(input.groupname, input.password, user, callback));
  };

  const pressEnter = (e: any) => {
    if (e.code === "Enter") {
      dispatch(CreateNewGroup(input.groupname, input.password, user, callback));
    }
  };

  const callback = (err: any) => {
    if (err) {
    } else {
      setinput({
        groupname: "",
        password: "",
      });
      props.onClose();
    }
  };

  return (
    <Modal
      open={props.open.addgroup}
      onClose={props.onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <>
        <Container>
          <GroupTitle>Create Your Group</GroupTitle>
          <FormContainer>
            <TextField
              error={error !== ""}
              helperText={error}
              fullWidth
              autoFocus
              className={classes.name}
              margin="dense"
              id="groupname"
              label="Group Name"
              type="text"
              value={input.groupname}
              onFocus={(e) => {
                dispatch(SetErrortoNull());
              }}
              onChange={(e) => {
                setinput((prevstate) => {
                  return { ...prevstate, groupname: e.target.value };
                });
              }}
            />
            <TextField
              fullWidth
              error={error1 !== ""}
              helperText={error1}
              className={classes.name}
              margin="dense"
              id="password"
              label="Password"
              type="password"
              value={input.password}
              onChange={(e) =>
                setinput((prevstate) => {
                  return { ...prevstate, password: e.target.value };
                })
              }
              onKeyPress={(e) => {
                dispatch(SetPwdErrortoNull());
                pressEnter(e);
              }}
              onFocus={(e) => {
                dispatch(SetPwdErrortoNull());
              }}
            />
            <ButtonGroup>
              <Button onClick={CreateGroup} className={classes.btn}>
                Create
              </Button>
              <Button onClick={props.onClose} className={classes.btn}>
                Cancel
              </Button>
            </ButtonGroup>
          </FormContainer>
        </Container>
      </>
    </Modal>
  );
};

export default Addgroup;
