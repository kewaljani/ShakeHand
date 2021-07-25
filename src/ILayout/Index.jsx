import React from 'react';
import { Layout, Row, Col } from 'antd';
import AppHeader from './Header'
import AppFooter from './Footer'

const { Content, Header, Footer } = Layout;

function Index(props) {
    return (
        <Layout style={{ minWidth: "100vh" }}>
            <Header
                className="bg_white"
                style={{
                    position: "fixed",
                    zIndex: 50,
                    width: "100%",
                    padding: 0
                }}>
                <AppHeader />
            </Header>
            <Content className="main_layout bg_white">
                <Row
                    type="flex"
                    justify="center"
                >
                    <Col lg={18} xl={18} xs={22} style={{ padding: '20px 0' }}>
                        {props.children}
                    </Col>
                </Row>
            </Content>
            <Footer className="bg_app_color app_footer">
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default Index;