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

      
      {/* <Row>
        <Col span={8}>
        <Card size="small" title="Kewal Jani">
            <Row style={{ border: 'solid' }}>
              <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Row>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </Card>
        </Col>
        <Col offset={1} span={15}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
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
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{padding:'10px 0'}}>
              <Col span={24} justify="center" align="center">
                <Card size="small" title="Certificates" extra={<a href="#">More</a>} style={{width:'100%'}} >
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
        </Col>
      </Row> */}
    </Router>
  );
}

export default Profile;