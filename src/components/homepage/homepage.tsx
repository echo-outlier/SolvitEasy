import React, { useState, useEffect } from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import Navbar from "../navbar/navbar";
import {
  IconButton,
  Paper,
  Typography,
  Button,
  Tooltip,
  Divider,
} from "@material-ui/core";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Addgroup from "./addgroup";
import Entergroup from "./entergroup";
import { RootState } from "../../store/store";
import {
  FetchGroupsInfo,
  FetchUserGroups,
  DeleteGroup,
} from "../../store/reducers/group";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router";
import DeleteIcon from "@material-ui/icons/Delete";

const PrimaryColor = "#002B6B";
const SecendoryColor = "#203E6B";
const hoverColor = "#294580";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "80%",
    margin: "auto",
    marginTop: "30px",
    padding: 20,
    gap: "20px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: "space-around",
    gap: "10px",
    width: "150px",
    height: "150px",
  },
  text: {
    fontSize: "17px",
    fontWeight: "bolder",
    textAlign: "center",
  },
  btn: {
    backgroundColor: PrimaryColor,
    color: "white",
    "&:hover": {
      backgroundColor: hoverColor,
    },
  },
  loader: {
    color: PrimaryColor,
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  divider: {
    display: "flex",
    width: "40%",
    justifyContent: "center",
    margin: "auto",
    marginTop: 5,
    borderBottom: "2px solid black",
    borderBottomColor: "rgba(0, 0, 0, 0.12)",
  },
  hr: {
    width: "80%",
    margin: "auto",
    marginTop: 5,
    borderBottom: "2px solid black",
    borderBottomColor: "rgba(0, 0, 0, 0.12)",
  },
  nogroup: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  abs: {
    position: "absolute",
    bottom: theme.spacing(6),
    right: theme.spacing(6),
  },
  tip: {
    fontSize: "20px",
    padding: "10px",
    backgroundColor: PrimaryColor,
  },
  dltbtn: {
    "&:hover": {
      color: "#cc5151",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState({
    addgroup: false,
    entergroup: false,
  });
  const [activegroup, setactivegroup] = useState("");
  const [token, userId, group_list, loading, active_group, active_user_groups] =
    useSelector((state: RootState) => {
      return [
        state.auth.idtoken,
        state.auth.userId,
        state.group.group_list,
        state.group.loading,
        state.group.active_group,
        state.group.active_user_groups,
      ];
    });

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token]);

  useEffect(() => {
    dispatch(FetchGroupsInfo());
    dispatch(FetchUserGroups(userId));
  }, []);


  const handleOpen = (group: string, groupname: string) => {
    if (groupname === active_group) {
      history.push("/home/questions");
    } else {
      setactivegroup(groupname);
      setOpen((prevstate) => {
        return { ...prevstate, [group]: true };
      });
    }
  };

  const handleClose = (group: string) => {
    setOpen((prevstate) => {
      return { ...prevstate, [group]: false };
    });
  };

  const checkdisabled = (groupname: string) => {
    let flag: boolean = true;
    active_user_groups.map((group: string) => {
      if (group === groupname) {
        flag = false;
      }
    });
    return flag;
  };

  return (
    <>
      <Tooltip
        classes={{ tooltip: classes.tip }}
        placement="left"
        title="Create Group"
        aria-label="add"
      >
        <Fab
          onClick={() => handleOpen("addgroup", "")}
          color="secondary"
          className={classes.abs}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Addgroup open={open} onClose={() => handleClose("addgroup")} />

      <Navbar />
      <div className={classes.heading}>Group List</div>
      <Divider className={classes.divider} />
      {loading ? (
        <Container>
          <CircularProgress className={classes.loader} />
        </Container>
      ) : (
        <div className={classes.root}>
          {group_list ? (
            group_list.map((groupname: any) => {
              return (
                <Paper key={groupname} className={classes.paper} elevation={3}>
                  <div>
                    <div className={classes.text}>{groupname}</div>
                    <Divider className={classes.hr} />
                  </div>
                  <div className={classes.flex}>
                    <Button
                      onClick={() => handleOpen("entergroup", groupname)}
                      color="secondary"
                      centerRipple={true}
                      className={classes.btn}
                    >
                      Enter
                    </Button>
                    {active_user_groups ? (
                      <IconButton
                        disabled={checkdisabled(groupname)}
                        className={classes.dltbtn}
                        onClick={() => dispatch(DeleteGroup(groupname, userId))}
                      >
                        <DeleteIcon />
                      </IconButton>
                    ) : (
                      <IconButton disabled={true} className={classes.dltbtn}>
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </div>
                </Paper>
              );
            })
          ) : (
            <div className={classes.nogroup}>No Groups Found</div>
          )}
          <Entergroup
            groupname={activegroup}
            open={open}
            onClose={() => handleClose("entergroup")}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
