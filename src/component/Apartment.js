import React from 'react';
import {Col, Row, Container, Form, FormControl,Button} from 'react-bootstrap';
import {Switch, Link, Route} from 'react-router-dom';
import MoreDetails from './MoreDetails';
import BookNow from './BookNow';
import House1 from './apartment1.jpeg';

function Apartment(){
    return <div style={{background:'#f1f2f3',paddingTop:'100px;'}}><h6 style={{marginTop:'60px',textAlign:'center'}}>
        Home | Apartment
        </h6>
    <Container className="container">
       <Row xs="12" sm="12" md="12" lg="12">
       <Col xs="12" sm="8" md="6" lg="4">
                    <div class="card mb-3 text-secondary">
                    <div class="card-body">
                    <p class="btn-block btn-success text-center p-2">Categories</p>
                    <hr></hr>
                    <strong>Property</strong>
                    <p>House & Apartment for Rent | 426</p>
                    <p>House & Apartment for Sale | 123</p>
                    <p>Land  & Plot for Rent | 56</p>
                    <p>Land  & Plot for Sale | 445</p>
                    <p class="text-success">Show All 8</p>
                    <hr></hr>
                    </div>
                    <p class="text-secondary text-center bg-black">13 Decimals 4Bedrooms 3Bathrooms 2Garages</p>
                    <p class="text-secondary text-center">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                    </div>
                    <div class="card mb-3 text-secondary">
                    <div class="card-body">
                    <strong>Loaction</strong>
                    <p>Central Region/Kampala</p>
                    </div>
                    </div>
                    <div class="card mb-3 text-secondary">
                    <div class="card-body">
                    <strong>Property Type</strong>
                    <Form className="d-flex mb-3 mt-2">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    </Form>
                    <p><Form.Check type="radio" label="Show All" name="group2" id="radio1"></Form.Check></p>
                    <p><Form.Check type="radio" label="House .23 ads" name="group2" id="radio2"></Form.Check></p>
                    <p><Form.Check type="radio" label="Apartment .65 ads" name="group2" id="radio3"></Form.Check></p>
                    <p><Form.Check type="radio" label="Bungalow .14 ads" name="group2" id="radio4"></Form.Check></p>
                    <p><Form.Check type="radio" label="Duplex .44 ads" name="group2" id="radio5"></Form.Check></p>
                    <p><Form.Check type="radio" label="Mansion .56 ads" name="group2" id="radio6"></Form.Check></p>
                    <p><Form.Check type="radio" label="Flat .4 ads" name="group2" id="radio7"></Form.Check></p>
                    </div>
                    </div>
                    <div class="card text-whit mb-3">
                    <div class="card-header text-white bg-success text-center">Featured Properties</div>
                    <div class="card-body text-center">
                        <img src={House1} style={{width:'230px'}} alt="Second slide"/>
                        <p>44 rentals apartment block for sale in the heart of Kololo sited on 1 acre selling price is $15 millions USD negotiable</p>
                        <p class="text-primary">$15000000</p>
                        <p class="text-primary">Please contact us</p>
                    </div>

                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="8">
                  <p><h3>Houses & Apartments For Rent in Kampala</h3></p>
                  <Row xs="12" sm="12" md="12" lg="12">
                 <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'100px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary mr-2">
                            <Link to={"/more"}> <span className="text-warning">Details</span></Link>
                             <Switch><Route exact path="/more" component={MoreDetails} /></Switch>
                            <Link to={"/bookNow"}>  <span class="text-primary">Book</span></Link>
                            <Switch><Route exact path="/bookNow" component={BookNow} /></Switch>
                        </p>
                    </div>
                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1}  style={{width:'100px'}} alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary mr-2">
                            <Link to={"/more"}> <span className="text-warning">Details</span></Link>
                             <Switch><Route exact path="/more" component={MoreDetails} /></Switch>
                            <Link to={"/bookNow"}>  <span class="text-primary">Book</span></Link>
                            <Switch><Route exact path="/bookNow" component={BookNow} /></Switch>
                        </p>
                    </div>
                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'100px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary mr-2">
                            <Link to={"/more"}> <span className="text-warning">Details</span></Link>
                             <Switch><Route exact path="/more" component={MoreDetails} /></Switch>
                            <Link to={"/bookNow"}>  <span class="text-primary">Book</span></Link>
                            <Switch><Route exact path="/bookNow" component={BookNow} /></Switch>
                        </p>
                    </div>
                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'100px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary mr-2">
                            <Link to={"/more"}> <span className="text-warning">Details</span></Link>
                             <Switch><Route exact path="/more" component={MoreDetails} /></Switch>
                            <Link to={"/bookNow"}>  <span class="text-primary">Book</span></Link>
                            <Switch><Route exact path="/bookNow" component={BookNow} /></Switch>
                        </p>
                    </div>
                    </div>
                </Col>
           </Row>
                    <p><h3>Houses & Apartments For Rent in Kampala</h3></p>
                  <Row class="mb-5" style={{background: '#ffffff'}}> 
                    <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card border-0">
                    <div class="card-body text-center">
                    <img  src={House1} style={{width:'230px'}}  alt="Second slide"/>
                    </div>
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="1">
                    <div class="card border-0 mb-4">
                    <div class="card-body">
                    <p class="text-right"></p>
                    </div>
                    
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="4">
                    <div class="card border-0 mb-4">
                    <div class="card-body float-right">
                    <p>44 rentals apartment block for sale in the heart of Kololo sited on 1 acre selling price is $15 millions USD negotiable</p>
                    <p class="text-success text-center">Ugx 365000</p>
                    </div>
                    
                    </div>
                    </Col>
                    </Row>
                    <Row class="mb-5" style={{background: '#ffffff'}}> 
                    <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card border-0">
                    <div class="card-body text-center">
                    <img  src={House1} style={{width:'230px'}}  alt="Second slide"/>
                    </div>
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="1">
                    <div class="card border-0 mb-4">
                    <div class="card-body">
                    <p class="text-right"></p>
                    </div>
                    
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="4">
                    <div class="card border-0 mb-4">
                    <div class="card-body float-right">
                    <p>44 rentals apartment block for sale in the heart of Kololo sited on 1 acre selling price is $15 millions USD negotiable</p>
                    <p class="text-success text-center">Ugx 365000</p>
                    </div>
                    
                    </div>
                    </Col>
                    </Row>
                    <Row class="mb-5" style={{background: '#ffffff'}}> 
                    <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card border-0">
                    <div class="card-body text-center">
                    <img  src={House1} style={{width:'230px'}}  alt="Second slide"/>
                    </div>
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="1">
                    <div class="card border-0 mb-4">
                    <div class="card-body">
                    <p class="text-right"></p>
                    </div>
                    
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="4">
                    <div class="card border-0 mb-4">
                    <div class="card-body float-right">
                    <p>44 rentals apartment block for sale in the heart of Kololo sited on 1 acre selling price is $15 millions USD negotiable</p>
                    <p class="text-success text-center">Ugx 365000</p>
                    </div>
                    
                    </div>
                    </Col>
                    </Row>
                    <Row class="mb-5" style={{background: '#ffffff'}}> 
                    <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card border-0">
                    <div class="card-body text-center">
                    <img  src={House1} style={{width:'230px'}}  alt="Second slide"/>
                    </div>
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="1">
                    <div class="card border-0 mb-4">
                    <div class="card-body">
                    <p class="text-right"></p>
                    </div>
                    
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="4">
                    <div class="card border-0 mb-4">
                    <div class="card-body float-right">
                    <p class="text-right">44 rentals apartment block for sale in the heart of Kololo sited on 1 acre selling price is $15 millions USD negotiable</p>
                    <p class="text-success text-center">Ugx 365000</p>
                    </div>
                    
                    </div>
                    </Col>
                    </Row>
                </Col>
        </Row>
        </Container>
        <Container>
        <Row xs="12" sm="12" md="12" lg="12">
                    <p class="text-center mt-3"><h4>Other Related Items</h4></p>
               <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'230px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary mr-2"><Link to={"/more"}> <Button className="btn bg-warning">view Details</Button></Link>
                             <Switch><Route exact path="/more" component={MoreDetails} /></Switch>
                            <Link to={"/bookNow"}>  <Button class="bg-primary">Book Now</Button></Link>
                            <Switch><Route exact path="/bookNow" component={BookNow} /></Switch></p>
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
        </Container>
        </div>;
}
export default Apartment;