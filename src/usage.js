import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Ex1 from "./exercises/1";
import Ex2 from "./exercises/2";
import Ex3 from "./exercises/3";
// import Ex4 from "./exercises/4";
// import Ex5 from "./exercises/5";
// import Ex6 from "./exercises/6";
// import Ex7 from "./exercises/7";
import Test from "./exercises/test";

// TODO Fix the bug with "/"
const routes = [Test, Ex1, Ex2, Ex3].map((C, i, arr) => (
  <Route
    key={i}
    path={i === 0 ? "/" : `/${i + 1}`}
    exact={i === 0}
    render={() => (
      <Fragment>
        {!!i && (
          <Link className="link left" to={i === 1 ? "/" : `/${i}`}>
            {"<"}- Exercise {i}
          </Link>
        )}
        <C />
        {i + 1 !== arr.length && (
          <Link className="link right" to={`/${i + 2}`}>
            Exercise {i + 2} ->
          </Link>
        )}
      </Fragment>
    )}
  />
));

const [firstRoute] = routes;

const Root = () => (
  <BrowserRouter>
    <Switch>{routes}</Switch>
  </BrowserRouter>
);

export default Root;
