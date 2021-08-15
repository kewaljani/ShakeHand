import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col, Radio } from 'antd'
import React, { useState } from 'react';
import ILayout from '../ILayout/Index'
import ULayout from '../ULayout/Index'

const Demo = () => {
    const [mainLayout, setMainLayout] = useState("auth")

    const onFinish = (values) => {
        console.log('Success:', values);
        localStorage.setItem("mainLayout", values.layout)
        setMainLayout(values.layout)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    let K = localStorage.getItem("mainLayout")
    console.log("K", K)
    return (
        <>
            {console.log("layout", mainLayout)}
            {mainLayout && K === 'institution' ? <ILayout /> : mainLayout && K === 'user' ? <ULayout /> :
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
                                <Form.Item
                                    label="Signin As"
                                    name="layout"
                                >
                                    <Radio.Group value={mainLayout} >
                                        <Radio value='institution'>Institution</Radio>
                                        <Radio value="user">User</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
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
                                            message: 'Please input your password!',
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
                </div>}
        </>
    );

};



export default Demo;
