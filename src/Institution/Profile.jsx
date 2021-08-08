import React from 'react';
import { Card, Col, Row } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout } from 'antd';
import { Image } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function Profile(props) {
  return (
    <Router >
      <Layout justify="center" align="center " >
        <Sider style={{padding:"60px 0", margin: '10px 0'}} span={10} className="bg_whitesmoke" >
          <Card size="small" title="Kewal Jani">
            <Row style={{ border: 'solid' }}>
              <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Row>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </Card>
        </Sider>
        <Layout>
          <Content style={{padding:"50px 0 0 10px",margin:'10px 0'}} >
            
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding:'10px 0 ' }}>
              <Col span={24} justify="center" align="center">
                <Card size="small" title="About You" extra={<a href="#">More</a>} style={{width:'100%'}} >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
            </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding:'10px 0'}}>
              <Col span={24} justify="center" align="center">
                <Card size="small" title="Work experience" extra={<a href="#">More</a>} style={{width:'100%'}} >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
            </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding:'10px 0'}}>
              <Col span={24} justify="center" align="center">
                <Card size="small" title="Certificates" extra={<a href="#">More</a>} style={{width:'100%'}} >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
            </Col>
            </Row>
            
          </Content>
        </Layout>
      </Layout>
      {/* <div className="text_green">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
          <Col xs={24} md={12} lg={8} >
            <Card size="small" title="Kewal" extra={<Link to="/institute-team">More</Link>} style={{ width: "100%" }} >
              <Row style={{ border: 'solid' }}>
                <Image
                  width={'100%'}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Row>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </Card>
          </Col>
          <Col xs={24} md={20} lg={16}>
            <Card size="small" title="About You" extra={<Link to="/institute-team">More</Link>} style={{ width: "100%" }}  >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </Card>
          </Col>

        </Row>
        
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        </Row>
      </div> */}
    </Router>
  );
}

export default Profile;