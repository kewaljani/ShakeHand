import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobCard from "../Components/JobCard";
import JobDetailCard from "../Components/JobDetailCard";
import AddJob from "../Components/AddJob";

function Jobs(props) {
  return (
    <Switch>
      <Route path="/institute/jobs/add">
        <AddJob />
      </Route>
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
