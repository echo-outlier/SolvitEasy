import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/home";
import Addques from "./components/questions/newques";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import Login from "./components/login/login";
import Answers from "./components/answers/answers";
import HomePage from "./components/homepage/homepage";
const Routes = () => {
  const token: any = useSelector((state: RootState) => state.auth.idtoken);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/home/questions" component={Home} />
      <Route exact path="/home/addques" component={Addques} />
      <Route exact path="/home/answers" component={Answers} />
    </React.Fragment>
  );
};

export default Routes;
