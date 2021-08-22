import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import InstituteProfile from "../Components/InstituteProfile";
import InstituteEditeProfile from "../Components/InstituteEditeProfile";

function Profile(props) {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route path="/institute/profile/edite">
        <InstituteEditeProfile />
      </Route>
      <Route path="/institute/profile">
        <InstituteProfile layout={"institute"} />
      </Route>
    </Switch>
  );
}

export default Profile;
