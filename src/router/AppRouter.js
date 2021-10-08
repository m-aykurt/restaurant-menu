import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CallUs from "../pages/CallUs";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/callus" component={CallUs} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
