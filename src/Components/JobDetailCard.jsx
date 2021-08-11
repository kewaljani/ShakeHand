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

function JobDetailCard(props) {
    return (
        <div>
            <Row>
                <Card title="Job Post Name" style={{ width: '100%' }}>
                    <Col>
                    <Row style={{borderBottom:'solid 1px'}}>
                        <table width="100%" style={{marginBottom:'20px'}} >
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
                       
                        {/* <Row style={{paddingTop:'20px'}}> */}
                            <h4>Qualification</h4>
                            
                        </Row>
                        <p style={{padding:'0 0 0 20px'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
                        <Row style={{borderBottom:'solid 1px'}}>
                        
                            <h4>Role Discription</h4>
                        </Row>
                        <p style={{padding:'0 0 0 20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Row style={{borderBottom:'solid 1px'}}>
                        
                            <h4>Pay or Rate</h4>
                        </Row>
                        <p style={{padding:'0 0 0 20px'}}> 2000$</p>
                        <Row style={{borderBottom:'solid 1px'}}>
                        
                            <h4>Location</h4>
                        </Row>
                        <p style={{padding:'0 0 0 20px'}}> Map</p>
                        <p className="text_right"><button type="primary" className="bg_green text_center" style={{ border: '0px', borderRadius: '5px', padding: '5px 20px 5px 20px' }}>  Apply</button></p>

                    </Col>
                </Card>
            </Row>
        </div>
    );
}

export default JobDetailCard;