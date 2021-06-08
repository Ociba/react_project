import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from 'react-bootstrap';
import Slide1 from './apart.jpeg';
import Slide2 from './apart2.jpeg';
import Slide3 from './apart5.jpeg';
function Carousels() {
    return <div>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Slide1}
      alt="First slide"
      height="450"
      background="rgba((0,0,255, 0.25)"
    />
    <Carousel.Caption>
      <h3 style={{color:'blue'}}>First slide label</h3>
      <p style={{color:'blue'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Slide2}
      alt="Second slide"
      height="450"
    />
    <Carousel.Caption>
      <h3 style={{color:'blue'}}>Second slide label</h3>
      <p style={{color:'blue'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
      height="450"
    />
    <Carousel.Caption>
      <h3 style={{color:'blue'}}>Third slide label</h3>
      <p style={{color:'blue'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>;
}
export default Carousels;