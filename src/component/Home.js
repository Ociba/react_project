import React from 'react';
import styled from 'styled-components';
import backgroundIm from './images.jpeg';
import {Row, Col, Button} from 'react-bootstrap';
import {Switch, Route, Link} from 'react-router-dom';
import BookNow from './BookNow';
import Image from './home.gif';
import House1 from './apart.jpeg';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faHome, faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons';
//import image from './james.jpg';
import Carousels from './Carousel';
import MoreDetails from './MoreDetails';
import {Carousel} from 'react-bootstrap';
import Slide1 from './apart.jpeg';
import Slide2 from './apart2.jpeg';
import Slide3 from './apart5.jpeg';

const TopContainer = styled.div`
background-image : url(${backgroundIm});
height: 60vh;
width:100%;
padding:0;
background-size:cover;
object-fit: cover;
opacity: 0.4;

`
function Home() {
    return <div className="body"> 
        <TopContainer>
            <Carousels />
        </TopContainer>
           <Row xs="12" sm="12" md="12" lg="12" className="bg-section cards">
               <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'230px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary mr-2"><Link to={"/more"}> <Button className="btn bg-warning">view Details</Button></Link>
                             <Switch><Route exact path="/more" component={MoreDetails} /></Switch>
                            <Link to={"/bookNow"}>  <Button class="bg-primary">Book Now</Button></Link>
                            <Switch><Route exact path="/bookNow" component={BookNow} /></Switch>
                        </p>
                    </div>
                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1}  style={{width:'230px'}} alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary mr-2"><Link to={"/more"}> <Button className="btn bg-warning">view Details</Button></Link>
                             <Switch><Route exact path="/more" component={MoreDetails} /></Switch>
                            <Link to={"/bookNow"}>  <Button class="bg-primary">Book Now</Button></Link>
                            <Switch><Route exact path="/bookNow" component={BookNow} /></Switch>
                        </p>
                    </div>
                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'230px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary mr-2"><Link to={"/more"}> <Button className="btn bg-warning">view Details</Button></Link>
                             <Switch><Route exact path="/more" component={MoreDetails} /></Switch>
                            <Link to={"/bookNow"}>  <Button class="bg-primary">Book Now</Button></Link>
                            <Switch><Route exact path="/bookNow" component={BookNow} /></Switch>
                        </p>
                    </div>
                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'230px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary mr-2"><Link to={"/more"}> <Button className="btn bg-warning">view Details</Button></Link>
                             <Switch><Route exact path="/more" component={MoreDetails} /></Switch>
                            <Link to={"/bookNow"}>  <Button class="bg-primary">Book Now</Button></Link>
                            <Switch><Route exact path="/bookNow" component={BookNow} /></Switch>
                        </p>
                    </div>
                    </div>
                </Col>
           </Row>
           <Row xs="12" sm="12" md="12" lg="12" className="bg2-section">
               <h3 style={{color:'black',textAlign:'center'}}>Learning React is Very Interesting</h3>
               <Col>
               React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.


                </Col>
           </Row>
           <Row xs="12" sm="12" md="12" lg="12" className="bg-section">
           <h3 style={{color:'black',textAlign:'center'}}>Current Programming Rate</h3>
               <Col>
               <div class="about-steps-group white-bg">
                    <div class="container">
                    <div class="row">
                    <div class="col-lg-3">
                    <div class="about-step">
                    <div class="about-step-img">
                    <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <h4 >400+</h4>
                    <p>People have joined the Gambo team in the past six months</p>
                    </div>
                    </div>
                    <div class="col-lg-3">
                    <div class="about-step">
                    <div class="about-step-img">
                    <FontAwesomeIcon icon={faHome} />
                    </div>
                    <h4>2x</h4>
                    <p>Rate of growth in our monthly user base</p>
                    </div>
                    </div>
                    <div class="col-lg-3">
                    <div class="about-step">
                    <div class="about-step-img">
                    <FontAwesomeIcon icon={faUser} />
                    </div>
                    <h4>10 days</h4>
                    <p>Time taken to launch in 8 cities across India</p>
                    </div>
                    </div>
                    <div class="col-lg-3">
                    <div class="about-step">
                    <div class="about-step-img">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <h4>95k</h4>
                    <p>App downloads on iOS and Android</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </Col>
           </Row>
           <Row xs="12" sm="12" md="12" lg="12" className="bg2-section">
           <h3 style={{color:'black',textAlign:'center'}}>Current Programming Rate</h3>
               <Col>
                    <img  alt="" src={Image}  className="news-image"/>
                </Col>
                <Col>
                React is so Interesting
                <div>
                When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

                As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.
            </div>
                </Col>
           </Row>
           <Row xs="12" sm="12" md="12" lg="12">
           <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={Slide1}
                    alt="First slide"
                    height="400"
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
                    height="400"
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
                    height="400"
                    />
                    <Carousel.Caption>
                    <h3 style={{color:'blue'}}>Third slide label</h3>
                    <p style={{color:'blue'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           </Row>
      <Footer />
    </div>
    ;
}
 
export default Home;