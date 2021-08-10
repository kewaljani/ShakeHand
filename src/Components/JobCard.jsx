import React from 'react';
import { Card, Col, Row } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {
  EnvironmentOutlined,
  CalendarOutlined,
  BookOutlined
} from '@ant-design/icons';
function JobCard(props) {
  return (
    <div>
      <Row>
        <Col offset={2} xs={24} md={12} lg={20}>
          <Card size="small" title="Job Title"  extra={<a href="#">More</a>}  style={{ width: "100%" }}>
            <table width="100%" >
              <tr  >
                <td width="30%" >
                  <EnvironmentOutlined />
                  Location
                </td>
                <td className="text_right" >
                  <CalendarOutlined /> Date posted
                </td>

              </tr>
            </table>

            <p style={{marginTop:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including</p>
            <p className="text_right"><button type="primary" className="bg_green text_center" style={{border:'0px' ,borderRadius:'2px', padding:'5px 20px 5px 20px'}}>  Expand</button></p>
          </Card>
        </Col>
        {/*  */}
      </Row>
    </div>
  );
}

export default JobCard;

