import React from 'react';
import {Col, Row, Button, Container,Card} from 'react-bootstrap';
import House1 from './apartment1.jpeg';
import Agent1 from './ociba.jpg';
import Agent2 from './ociba2.jpg';

function viewHouseDetails(){
    return <div><h3 style={{textAlign:'center',marginTop:'60px'}}>BookNow</h3>
    
    <Container>
       <Row xs="12" sm="12" md="12" lg="12">
               <Col xs="12" sm="8" md="6" lg="9">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'230px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                        <p class="card-text text-primary">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                        <p class="text-secondary"><Button className="btn bg-warning">view Details</Button> <Button style={{textAlign:'right'}}>Book Now</Button></p>
                    </div>
                    <p class="text-secondary text-center bg-black">13 Decimals 4Bedrooms 3Bathrooms 2Garages</p>
                    <p class="text-secondary text-center">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                    </div>
                    <Row xs="12" sm="12" md="12" lg="12"> 
                    <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'150px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                    </div>
                    <p class="text-secondary text-center bg-black">13 Decimals 4Bedrooms 3Bathrooms 2Garages</p>
                    <p class="text-secondary text-center">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'150px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                    </div>
                    <p class="text-secondary text-center bg-black">13 Decimals 4Bedrooms 3Bathrooms 2Garages</p>
                    <p class="text-secondary text-center">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'150px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                    </div>
                    <p class="text-secondary text-center bg-black">13 Decimals 4Bedrooms 3Bathrooms 2Garages</p>
                    <p class="text-secondary text-center">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                    </div>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-white mb-3">
                    <div class="card-body text-center">
                    <h5 class="card-title"><img  src={House1} style={{width:'150px'}}  alt="Second slide"/></h5>
                    <p class="badge bg-danger text-right">For Sale</p>
                    </div>
                    <p class="text-secondary text-center bg-black">13 Decimals 4Bedrooms 3Bathrooms 2Garages</p>
                    <p class="text-secondary text-center">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
                    </div>
                    </Col>
                    </Row>
                    <Row>
                        <h2 class="text-center">Our Available Agents</h2>
                    <Col xs="12" sm="8" md="6" lg="3" bg="primary">
                    <Card style={{ border:'none',textAlign:'center'}}>
                        <Card.Body>
                        <Card.Title><img src={Agent1} width="120" height="100" alt=""/></Card.Title>
                        <Card.Text>
                            <p>Name : Ociba James</p>
                            <p>Location : Kawempe</p>
                            <p>Phone Contact : 0775401793</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="3">
                    <Card style={{ border:'none',textAlign:'center'}}>
                        <Card.Body>
                        <Card.Title><img src={Agent2} width="120" height="100" alt=""/></Card.Title>
                        <Card.Text>
                        <p>Name : Ociba James</p>
                            <p>Location : Kawempe</p>
                            <p>Phone Contact : 0775401793</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="3">
                    <Card style={{ border:'none',textAlign:'center'}} >
                        <Card.Body>
                        <Card.Title><img src={Agent1} width="120" height="100" alt=""/></Card.Title>
                        <Card.Text>
                        <p>Name : Ociba James</p>
                            <p>Location : Kawempe</p>
                            <p>Phone Contact : 0775401793</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs="12" sm="8" md="6" lg="3">
                    <Card style={{ border:'none',textAlign:'center'}}>
                        <Card.Body>
                        <Card.Title><img src={Agent1} width="120" height="100" alt=""/></Card.Title>
                        <Card.Text>
                           <p>Name : Ociba James</p>
                            <p>Location : Kawempe</p>
                            <p>Phone Contact : 0775401793</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="card text-whit mb-3">
                    <div class="card-header text-black text-center">Contact Us</div>
                    <div class="card-body">
                        <form>
                          <div class="form-row ">
                            <div class="form-group mb-1">
                            <label for="inputEmail4">Name</label>
                            <input type="text" class="form-control" id="inputEmail4"/>
                            </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group mb-1">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group mb-1">
                                <label for="inputEmail4">Phone Number</label>
                                <input type="text" class="form-control" id="inputEmail4"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                <label for="inputEmail4">Message</label>
                                <textarea type="text" rows="4" class="form-control" id="inputEmail4"></textarea>
                                </div>
                            </div>
                            <div class="form-group text-center mt-3">
                                <div class="">
                                <button type="submit" class="btn btn-primary">Send Inquiry</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div class="card text-whit mb-3">
                    <div class="card-header text-black text-center">James Currency Converter</div>
                    <div class="card-body">
                        <form>
                          <div class="form-row ">
                            <div class="form-group mb-1">
                            <input type="text" class="form-control" name="name" id="inputEmail4" placeholder="USD"/>
                            </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group mb-1">
                                <select type="email" class="form-control">
                                    <option>USD-US Dollar</option>
                                    <option>EGP-Egyptian Pound</option>
                                    <option>NGN-Nigerian Naira</option>
                                </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group mb-1">
                                <select type="email" class="form-control">
                                    <option>UGX-Uganda Shillings</option>
                                    <option>KSH-Kenya Shillings</option>
                                    <option>TZSh-Tanzania Shillings</option>
                                </select>
                                </div>
                            </div>
                            <div class="form-group text-center mt-3">
                                <div class="">
                                   34,345.32 Ugx
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-black text-center">06 June, 2021
                    <hr></hr>
                    Currency Converted: USD|UGX
                    </div>
                    </div>
                    <div class="card text-whit mb-3">
                    <div class="card-header text-black text-center">Featured Properties</div>
                    <div class="card-body text-center">
                        <img src={House1} style={{width:'230px'}} alt="Second slide"/>
                        <p>44 rentals apartment block for sale in the heart of Kololo sited on 1 acre selling price is $15 millions USD negotiable</p>
                        <p class="text-primary">$15000000</p>
                    </div>

                    </div>
                </Col>
        </Row>
        </Container>
        </div>;
}
export default viewHouseDetails;