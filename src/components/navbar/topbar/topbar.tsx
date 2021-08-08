import React, { useState, useEffect } from "react";
import { Container, MainContainer, InfoContainer, Info } from "./styles";
import { Link } from "react-router-dom";
import {
  Badge,
  Popper,
  Fade,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { isMobile } from "react-device-detect";
import { ClickAwayListener } from "@material-ui/core";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: 100,
  },
  paper: {
    width: 300,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: "5px",
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const Topbar = () => {
  const [ques_marked, setques_marked] = useState(null);
  const questions = useSelector((state: RootState) => state.ques.questions);
  const [anchorEl, setAnchorEl]: any = useState(null);
  const [open, setopen]: any = useState(false);
  const classes = useStyles();
  useEffect(() => {
    const all_ques = [...questions];
    let ans: any = 0;
    var newques = all_ques.map((question: any) => {
      let flag: boolean = false;
      const answers = { ...question.answers };
      Object.keys(answers).map((user: any) => {
        if (answers[user].saved.a === true) flag = true;
        if (answers[user].saved.b === true) flag = true;
        if (answers[user].saved.c === true) flag = true;
        if (answers[user].saved.d === true) flag = true;
      });
      if (flag) {
        ans++;
      }
    });
    if (ans === 0) {
      ans = null;
    }
    setques_marked(ans);
  }, [questions]);
  return (
    <MainContainer>
      <Container>
        <Link to="/home/questions">
          <Badge
            badgeContent={questions.length > 0 ? questions.length : null}
            color="secondary"
          >
            <div data-name="/home/questions" className="item active">
              Questions
            </div>
          </Badge>
        </Link>
        <Badge badgeContent={ques_marked} color="primary">
          <Link to="/home/answers">
            <div data-name="/home/answers" className="item">
              Answers
            </div>
          </Link>
        </Badge>
        <Link to="/home/addques">
          <div data-name="/home/addques" className="item">
            Add
          </div>
        </Link>
      </Container>
      <InfoContainer>
        <div>
          <BsFillQuestionCircleFill
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
              setopen((prev: any) => !prev);
            }}
          />
        </div>
        <Popper
          className={classes.popper}
          open={open}
          anchorEl={anchorEl}
          placement="bottom-end"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper className={classes.paper}>
                <Info>
                  <span className="inside-info" id="selected"></span>{" "}
                  <span>Selected Option</span>
                </Info>
                <Info>
                  <span className="inside-info"></span>
                  <span>Ticked Option</span>
                </Info>
                <Info>
                  <span>
                    <CheckIcon className="tick" fontSize="small" />
                  </span>{" "}
                  <span>Q. atleast marked by one person</span>
                </Info>
                <Info>
                  <span>
                    <ClearIcon className="cross" fontSize="small" />
                  </span>{" "}
                  <span>Q. not marked by anyone</span>
                </Info>
                <Info>
                  <span className="badge">
                    <Badge badgeContent={5} color="secondary" />
                  </span>
                  <span>Total Number of Ques. added</span>
                </Info>
                <Info>
                  <span className="badge">
                    <Badge badgeContent={2} color="primary" />
                  </span>
                  <span>Total Number of Ques. answered</span>
                </Info>
                <Info>
                  <span>YQN. </span>
                  <span>
                    <b>Your Question Number</b> - this number will show in
                    Answers section. This is helpful when the ques. are
                    shuffled.
                  </span>
                </Info>
              </Paper>
            </Fade>
          )}
        </Popper>
      </InfoContainer>
    </MainContainer>
  );
};

export default Topbar;
