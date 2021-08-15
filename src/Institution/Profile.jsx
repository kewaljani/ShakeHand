import React, { useState } from "react";
import { Card, Col, Row, Avatar, Typography } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  UserOutlined,
  TeamOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;

function Profile(props) {
  return (
    <Row style={{ marginTop: "0.5em" }}>
      <Col offset={2} xs={24} md={12} lg={20}>
        <Card
          size="small"
          title={
            <Row type="flex" justify="space-between">
              <div className="text_app_color text_large">Institute Name</div>
              <div>
                <button type="primary" className="green_button">
                  <Link to="/institute-jobs/1" className="text_white">
                    Edite
                  </Link>
                </button>
              </div>
            </Row>
          }
          style={{ width: "100%" }}
        >
          <Row>
            <Col span={7}>
              <Avatar size={128} icon={<UserOutlined />} />
            </Col>
            <Col span={17}>
              <Row type="flex" justify="space-between">
                <Col span={24}>
                  <MailOutlined className="text_pink" />
                  &nbsp; shakehand@gmail.com
                </Col>
                <Col span={24}>
                  <GlobalOutlined className="text_pink" />
                  &nbsp; https//shakehand.com
                </Col>
                <Col span={24}>
                  <EnvironmentOutlined className="text_pink" />
                  &nbsp; Location(Address+Country)
                </Col>
                <Col span={24}>
                  <TeamOutlined className="text_pink" />
                  &nbsp; Institute Size: 250
                </Col>
                <Col span={24}>
                  <SolutionOutlined className="text_pink" />
                  &nbsp; Institute Type
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col span={24}>
              <Paragraph
                ellipsis={{
                  rows: 3,
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
  );
}

export default Profile;
