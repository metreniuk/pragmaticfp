import React, { Fragment } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Ex1 from "./exercises/1";
import Ex2 from "./exercises/2";
import Ex3 from "./exercises/3";

const routes = [Ex1, Ex2, Ex3].map((C, i, arr) => (
  <Route
    path={`/${i + 1}`}
    render={() => (
      <Fragment key={i}>
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

// <Route path="/1" component={Ex1} />
// <Route path="/2" component={Ex2} />
// <Route path="/3" component={Ex3} />

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Ex3} />
      {routes}
    </Switch>
  </BrowserRouter>
);

export default Root;
