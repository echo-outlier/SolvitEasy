import React, { useState } from "react";
import { TextField, Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { EnterGroup, SetErrortoNull } from "../../store/reducers/group";
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
  h2 {
    width: 100%;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  h2 {
    text-align: center;
    margin-bottom: 80px;
  }
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

const Entergroup = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [error, activegroup] = useSelector((state: RootState) => {
    return [state.group.error, state.group.active_group];
  });
  const [input, setinput] = useState("");

  const callback = (err: any) => {
    if (err) {
    } else {
      setinput("");
    }
  };

  const pressEnter = (e: any) => {
    if (e.code === "Enter") {
      dispatch(EnterGroup(props.groupname, input));
    }
  };

  return (
    <Modal
      open={props.open.entergroup}
      onClose={props.onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <>
        <Container>
          <FormContainer
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(EnterGroup(props.groupname, input));
            }}
          >
            <h2>Enter Password</h2>
            <TextField
              fullWidth
              error={error !== ""}
              helperText={error}
              autoFocus
              className={classes.name}
              margin="dense"
              id="password"
              label="Password"
              type="password"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              onFocus={(e) => {
                dispatch(SetErrortoNull());
              }}
              onKeyPress={(e) => pressEnter(e)}
            />
            <ButtonGroup>
              <Button
                type="submit"
                onClick={() => dispatch(EnterGroup(props.groupname, input))}
                className={classes.btn}
              >
                Enter
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

export default Entergroup;
