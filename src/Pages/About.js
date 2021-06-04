import React, {Component} from 'react'
import { Nav, Container, Tab, Row, Col } from 'react-bootstrap'
import Des from '../assets/designer.jpg'
import Team from '../assets/team.jpg'
import Prog from '../assets/prog.jpg'
import Fram from '../assets/framework.jfif'


export default class About extends Component {
    render(){
        return(
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='therd'>Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='four'>Framework</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className="mt-3">
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <img src={Des} alt="designer" className="w-80" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second' >
                                    <img src={Team} alt='Team' className="w-80"/>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='therd'>
                                    <img src={Prog}  alt='Programming' className="w-80" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='four'>
                                    <img src={Fram} alt='Framework' className="w-80" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}