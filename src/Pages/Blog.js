import React, {Component} from 'react';

import Des from '../assets/designer.jpg';
import Team from '../assets/team.jpg';
import Prog from '../assets/prog.jpg';
import Fram from '../assets/framework.jfif';
import { Media, Container, Row, Col, ListGroupItem, Card } from 'react-bootstrap';

export default class Blog extends Component {
    render(){
        return(
            <>
                <Container>
                    <Row>
                        <Col md='9' >
                            <Media className='m-5'>
                                <img width={150} height={150} className='mr-3' src={Des}  />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img width={150} height={150} className='mr-3' src={Des}  />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img width={150} height={150} className='mr-3' src={Des}  />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img width={150} height={150} className='mr-3' src={Des}  />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md='3'>
                            <h5>Category</h5>
                            <Card>
                                <List.Group>
                                    <ListGroup.Item>Html/Css</ListGroup.Item>
                                    <ListGroup.Item>JavaScript</ListGroup.Item>
                                    <ListGroup.Item>Python</ListGroup.Item>
                                    <ListGroup.Item>Java</ListGroup.Item>
                                    <ListGroup.Item>C++</ListGroup.Item>
                                </List.Group>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}