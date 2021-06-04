import React, {Component} from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import Des from '../assets/designer.jpg'
import Team from '../assets/team.jpg'
import Prog from '../assets/prog.jpg'


export default class Home extends Component {
    render(){
        return(
          <>
            <CarouselBox></CarouselBox>
            <Container>
              <h2 className='text-center m-4'>Our Team</h2>
              <CardDeck className='m-4'>
                <Card>
                  <Card.Img variant='top' src={Prog} />
                  <Card.Body>
                    <Card.Title>Dasturchilar</Card.Title>
                    <Card.Text>Biz bilan olg'a bor va o'z kelajagingni o'z qo'ling bilan yarat</Card.Text>
                    <Button variant='primary'>About</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant='top' src={Des} />
                  <Card.Body>
                    <Card.Title>Dasturchilar</Card.Title>
                    <Card.Text>Biz bilan olg'a bor va o'z kelajagingni o'z qo'ling bilan yarat</Card.Text>
                    <Button variant='primary'>About</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant='top' src={Team} />
                  <Card.Body>
                    <Card.Title>Dasturchilar</Card.Title>
                    <Card.Text>Biz bilan olg'a bor va o'z kelajagingni o'z qo'ling bilan yarat</Card.Text>
                    <Button variant='primary'>About</Button>
                  </Card.Body>
                </Card>
                
              </CardDeck>
            </Container>

          </>
          



        );
    }
}