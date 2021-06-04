import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CybraryImg from '../assets/cybrarywel.jpg';
import CybraryI from '../assets/cybrary.png';
import CybraryIm from '../assets/cybrarypas.png'
import CybraryImge from '../assets/image.webp';



export default class CarouselBox extends Component {
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 h-80"
                        src={CybraryImg}
                        alt="Cybrary" 
                    />
                    <Carousel.Caption>
                        <h3>Cybrary site</h3>
                        <p>You can do everything</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 h-80"
                        src={CybraryI}
                        alt="Cybrary" 
                    />
                    <Carousel.Caption>
                        <h3>Cybrary site</h3>
                        <p>You can do everything</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 h-80"
                        src={CybraryIm}
                        alt="Cybrary" 
                    />
                    <Carousel.Caption>
                        <h3>Cybrary site</h3>
                        <p>You can do everything</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 h-80"
                        src={CybraryImge}
                        alt="Cybrary" 
                    />
                    <Carousel.Caption>
                        <h3>Cybrary site</h3>
                        <p>You can do everything</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
