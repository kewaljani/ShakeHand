import React from "react";
import { Col, Row } from "antd";
import { Switch, Route } from "react-router-dom";
import JobCard from "../Components/JobCard";
import InstituteCard from "../Components/InstituteCard";
import InstituteProfile from "../Components/InstituteProfile";

function Institute() {
  return (
    <Switch>
      <Route path="/user/institute/detail">
        <Row gutter={[16, 0]} style={{ marginTop: "0.5em" }}>
          <Col xs={24} md={6} lg={6}>
            <InstituteProfile/>
          </Col>
          <Col xs={24} md={18} lg={18}>
            <JobCard layout={"institute"} />
            <JobCard layout={"institute"} />
          </Col>
        </Row>
      </Route>
      <Route path="/user/institute">
        <InstituteCard />
      </Route>
    </Switch>
  );
}

export default Institute;
