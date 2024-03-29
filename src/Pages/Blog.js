import React, {Component} from 'react';

import Des from '../assets/designer.jpg';
import Team from '../assets/team.jpg';
import Prog from '../assets/prog.jpg';
import Fram from '../assets/framework.jfif';
import { Media, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

export default class Blog extends Component {
    render(){
        return(
            <>
                <Container>
                    <Row>
                        <Col md='9' >
                            <Media className='m-5'>
                                <img width={150} height={150} className='mr-3' src={Des} alt='Blog' />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img width={150} height={150} className='mr-3' src={Team} alt='Blog' />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img width={150} height={150} className='mr-3' src={Prog} alt='Blog' />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img width={150} height={150} className='mr-3' src={Fram} alt='Blog' />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md='3' >
                            <h5 className='text-center mt-5'>Category</h5>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>Html/Css</ListGroup.Item>
                                    <ListGroup.Item>JavaScript</ListGroup.Item>
                                    <ListGroup.Item>Python</ListGroup.Item>
                                    <ListGroup.Item>Java</ListGroup.Item>
                                    <ListGroup.Item>C++</ListGroup.Item>
                                </ListGroup>
                            </Card>
                            <Card className='mt-3' bg='light'>
                                <Card.Body>
                                    <Card.Title>Team Our</Card.Title>
                                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}