import React from 'react';
import image from './james.jpg'; 
import '../App.css';
import {Container, Row} from 'react-bootstrap';
function About() {
    return <div >
            <h3 style={{textAlign:'center'}}>About</h3>
             <h2 style={{textAlign:'center'}}>Welcome to About Page</h2>
             <p style={{textAlign:'center'}}><img
                alt=""
                src={image}
                width="40"
                height="40"
                className="image"
                />
            </p>
             
                 <Container>
                     <Row xs="12" md="12" sm="12" lg="12">
                     <p>
             React-Bootstrap Tables Component
                Last Updated : 31 Mar, 2021
                React-Bootstrap is a front-end framework that was designed keeping react in mind. Bootstrap was re-built and revamped for React, hence it is known as React-Bootstrap. 

                Tables in react-bootstrap come with predefined style classes which are both responsive and reliable.

                Table props:

                bordered: Adds borders on all sides of the tables and cells.
                borderless: Removes borders on all sides including table header.
                variant: It is used to invert the colors of the table from dark to light and vice versa.
                size: It is used to set the size of the table. When we set it as ‘sm’ the cell padding is reduced by half.
                bsPrefix: It is an escape hatch for working with strongly customized bootstrap CSS.
                Creating React Application And Installing Module:

                Step 1: Create a React application using the following command:
             </p>
             </Row>
            </Container>
    </div>;
}
 
export default About;