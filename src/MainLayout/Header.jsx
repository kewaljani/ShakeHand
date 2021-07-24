import React, { useState } from 'react';
import { Row, Col, Menu, Avatar, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function HeaderIndex(props) {

    const [menu, setMenu] = useState('user-jobs')
    const handleClick = e => {
        console.log('click ', e);
        setMenu(e.key);
    };
    return (
        <Row type="flex" justify="middle" align="space-between">
            <Col
                offset={1}
                span={3}
                style={{ marginTop: "-0.2em" }}
            >
                {/* <img src={User} className="app_logo" /> */}
                LOGO
            </Col>
            <Col span={7} offset={1} className="app_menu_wrapper">
                <Input
                    placeholder="Search here"
                    size="small"
                    className="header_search"
                    suffix={
                        <i className="icon-search text_app_color text_normal" />
                    }
                />
            </Col>
            <Col pull={1} className="app_menu_wrapper">
                <div className="app_menu">
                    <Menu mode="horizontal" onClick={handleClick} selectedKeys={[menu]}>
                        <Menu.Item key="user-jobs">
                            Jobs
                        </Menu.Item>
                        <Menu.Item key="user-message">
                            Message
                        </Menu.Item>
                        <Menu.Item key="user-account">
                            Account
                        </Menu.Item>
                        <Menu.Item key="profile">
                            <Avatar size="large" icon={<UserOutlined />} />
                        </Menu.Item>
                    </Menu>
                </div>
            </Col>
        </Row>

    );
}

export default HeaderIndex;