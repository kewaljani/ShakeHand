import React, { useState } from "react";
import { Card, Col, Row, Typography } from "antd";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  BookOutlined,
  TeamOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import JobDetailCard from "../Components/JobDetailCard";

const { Paragraph } = Typography;

function JobCard(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/institute-jobs/1");
  }
  return (
    <div>
      <Router>
        <Row style={{ marginTop: "0.5em" }}>
          <Col offset={2} xs={24} md={12} lg={20}>
            <Card
              size="small"
              title={
                <Row type="flex" justify="space-between">
                  <div className="text_app_color text_large ">Job Title</div>
                  <div>
                    <button type="primary" className="green_button" onClick={handleClick} >
                      Expand
                    </button>
                  </div>
                </Row>
              }
              style={{ width: "100%" }}
            >
              <Row type="flex" justify="space-between">
                <Col>
                  <EnvironmentOutlined className="text_pink" />
                  &nbsp; Location
                </Col>
                <Col>
                  <BookOutlined className="text_pink" />
                  &nbsp; Institite Name
                </Col>
                <Col>
                  <TeamOutlined className="text_pink" />
                  &nbsp; Openings: 5
                </Col>
                <Col>
                  <SolutionOutlined className="text_pink" />
                  &nbsp; Full Time
                  {/* Part Time 
                Internship */}
                </Col>
                <Col>
                  <CalendarOutlined className="text_pink" />
                  &nbsp; Date posted
                </Col>
              </Row>
              <Row type="flex" justify="space-around">
                <Col span={24}>
                  <Paragraph
                    ellipsis={{
                      rows: 1,
                      expandable: true,
                      symbol: "more",
                    }}
                    style={{ marginTop: "1em", whiteSpace: "normal" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </Paragraph>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        {/* <Switch>
          <Route path="/institute-jobs/1">
            <JobDetailCard />
          </Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default JobCard;
