import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Ex1 from "./exercises/1";
import Ex2 from "./exercises/2";
import Ex3 from "./exercises/3";
import Ex4 from "./exercises/4";
import Ex5 from "./exercises/5";

const routes = [Ex1, Ex2, Ex3, Ex4, Ex5].map((C, i, arr) => (
  <Route
    key={i}
    path={`/${i + 1}`}
    render={() => (
      <Fragment>
        {!!i && (
          <Link className="link left" to={`/${i}`}>
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
    <Switch>
      <Route exact path="/" component={Ex5} />
      {routes}
    </Switch>
  </BrowserRouter>
);

export default Root;
