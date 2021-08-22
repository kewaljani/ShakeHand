import React from "react";
import ILayout from "./../ILayout/Index";
import JobCard from "../Components/JobCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import JobDetailCard from "../Components/JobDetailCard";

function Jobs(props) {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route path="/institute/jobs/detail">
        <JobDetailCard />
      </Route>
      <Route path="/institute/jobs">
        <JobCard layout={"institute"} />
      </Route>
    </Switch>
  );
}

export default Jobs;
