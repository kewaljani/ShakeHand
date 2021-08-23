import React from "react";
import { Col, Row } from "antd";
import { Switch, Route } from "react-router-dom";
import InstituteProfile from "../Components/InstituteProfile";
import InstituteEditeProfile from "../Components/InstituteEditeProfile";
import JobCard from "../Components/JobCard";

function Profile(props) {
  return (
    <Switch>
      <Route path="/institute/profile/edite">
        <InstituteEditeProfile />
      </Route>
      <Route path="/institute/profile">
        <Row gutter={[16, 0]} style={{ marginTop: "0.5em" }}>
          <Col xs={24} md={6} lg={6}>
            <InstituteProfile edite={"edite"} />
          </Col>
          <Col xs={24} md={18} lg={18}>
            <JobCard layout={"institute"} />
            <JobCard layout={"institute"} />
          </Col>
        </Row>
      </Route>
    </Switch>
  );
}

export default Profile;
