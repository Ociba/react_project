import React from 'react';
import styled from 'styled-components';
import backgroundIm from './images.jpeg';
import {Container, Row, Col} from 'react-bootstrap';
import Image from './home.gif';
import image from './james.jpg';

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
    return <div> 
        <TopContainer>
            <h1 style={{textAlign:'center'}}>Home</h1>
            <p style={{textAlign:'center'}}><img
                alt=""
                src={image}
                width="60"
                height="60"
                className="image"
                />
            </p>
            </TopContainer>
       <h1>Welcome to Home</h1>
       <Container>
           <Row xs="12" sm="12" md="12" lg="12">
               <Col>
                    <div class="card text-white bg-success mb-3">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </Col>
                <Col>
                    <div class="card text-white bg-primary mb-3">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </Col>
                <Col>
                    <div class="card text-white bg-warning mb-3">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </Col>
                <Col>
                    <div class="card text-white bg-danger mb-3">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Success card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </Col>
           </Row>
       </Container>
       <Container>
           <Row xs="12" sm="12" md="12" lg="12">
               <h1 style={{color:'black',textAlign:'center'}}>Learning React is Very Interesting</h1>
               <Col>
               React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.


                </Col>
           </Row>
       </Container>
       <Container>
           <Row xs="12" sm="12" md="12" lg="12">
           <h1 style={{color:'black',textAlign:'center'}}>Current Programming Rate</h1>
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
       </Container>
    </div>
    ;
}
 
export default Home;