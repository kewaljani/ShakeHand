import { Form, Input, Button, Checkbox } from "antd";
import { Row, Col, Radio } from "antd";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import ILayout from "../ILayout/Index";
import ULayout from "../ULayout/Index";

const Demo = () => {
  let history = useHistory();
  const [mainLayout, setMainLayout] = useState("auth");
  const [key, setKey] = useState("auth");
  const onFinish = (values) => {
    // console.log('Success:', values);
    localStorage.setItem("mainLayout", values.layout);
    setMainLayout(values.layout);
    {
      mainLayout === "institution"
        ? history.push("/institute")
        : history.push("/user");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    let K = localStorage.getItem("mainLayout");
    setKey(K);
  }, []);

  return (
    <Router>
      <Route exact path="/">
        {/* {console.log("layout", mainLayout)} */}
        {/* {mainLayout && key === "institution" ? (
          <ILayout />
        ) : mainLayout && key === "user" ? (
          <ULayout />
        ) : ( */}
        <div className="mainlayout">
          <Row style={{ marginTop: "10%" }}>
            <Col offset={8} className="text_center">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item label="Signin As" name="layout">
                  <Radio.Group value={mainLayout}>
                    <Radio value="institution">Institution</Radio>
                    <Radio value="user">User</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
        {/* )} */}
      </Route>
    </Router>
  );
};

export default Demo;
