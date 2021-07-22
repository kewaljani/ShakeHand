import React, { Children } from 'react';
import { Layout, Row, Col } from 'antd';
import PracticeHeader from './Header'
import SharedFooter from './Footer'

const { Content, Header, Footer } = Layout;

function Index(props) {
    return (
        <Layout style={{ minWidth: "100vh" }}>
            <Header className="bg_white" style={{ position: 'fixed', zIndex: 5, width: '100%', padding: 0, backgroundColor: "blue" }}>
                <PracticeHeader />
            </Header>
            <Content>
                <Row
                    type="flex"
                    justify="center"
                >
                    <Col lg={18} xl={18} xs={22} style={{ padding: '20px 0' }}>
                        {props.children}
                    </Col>
                </Row>
            </Content>
            <Footer style={{ bottom: 0, position: 'fixed', marginBottom: 0, backgroundColor: 'blue', width: '100%', height: '100px' }}>
                <SharedFooter />
            </Footer>
        </Layout>
    );
}

export default Index;