import React, { useState } from "react";
import { Card, Col, Row, Form, Input, Button } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function InstituteEditeProfile(props) {
  const onFinish = (values) => {
    console.log(values);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  return (
    <Row
      style={{ marginTop: "0.5em", display: "flex", justifyContent: "center" }}
    >
      <Col xs={24} md={16} lg={14}>
        <Card>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "phone_number"]}
              label="Phone No."
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "phone_number"]}
              label="Address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "website"]} label="Website">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "about"]} label="About You">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              style={{ display: "flex", justifyContent: "end", float: "right" }}
            >
              <Button type="primary" htmlType="submit" className="green_button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default InstituteEditeProfile;
