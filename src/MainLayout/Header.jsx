import React, { useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;

function HeaderIndex(props) {

    const [menu, setMenu] = useState('mail')
    const handleClick = e => {
        console.log('click ', e);
        // setMenu( e.key );
    };
    return (
        <Row style={{ justifyContent: "space-between", display: "flex" }}>
            <Col>
                Mudra
            </Col>
            <Col>
                Kewal
            </Col>
        </Row>
    );
}

export default HeaderIndex;