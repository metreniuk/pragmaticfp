import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Ex1 from "./exercises/1";
import Ex2 from "./exercises/2";
import Ex3 from "./exercises/3";
import Ex4 from "./exercises/4";
import Ex5 from "./exercises/5";
import Ex6 from "./exercises/6";
import S1 from "./solutions/1";
import S2 from "./solutions/2";
import S3 from "./solutions/3";
import S4 from "./solutions/4";
import S5 from "./solutions/5";
import S6 from "./solutions/6";
import Use1 from "./usages/1";
import Use2 from "./usages/2";
import Use3 from "./usages/3";
import Use4 from "./usages/4";
import Use5 from "./usages/5";
import Use6 from "./usages/6";

// TODO Fix the bug with "/"
const routes = [Use1, Use2, Use3, Use4, Use5, Use6].map((C, i, arr) => (
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

const Root = () => (
  <BrowserRouter>
    <Switch>{routes}</Switch>
  </BrowserRouter>
);

export default Root;
