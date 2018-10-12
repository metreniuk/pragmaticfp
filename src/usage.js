import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Ex1 from "./exercises/1";
import Ex2 from "./exercises/2";
import Ex3 from "./exercises/3";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Ex3} />
      <Route path="exercises/1" component={Ex1} />
      <Route path="exercises/2" component={Ex2} />
      <Route path="exercises/3" component={Ex3} />
    </Switch>
  </BrowserRouter>
);

export default Root;
