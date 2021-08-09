import React from 'react';
import { Card, Col, Row } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
function JobCard(props) {
    return (
      <div>
          <Row>
           <Col xs={24} md={12} lg={8}>
            <Card size="small" title="Kewal" extra={<Link to="/institute-team">More</Link>} style={{ width: "100%" }} className="bg_blue" >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </Card>
          </Col>
        
        </Row>
      </div>
    );
}

export default JobCard;

