import React from 'react';
import House1 from './apartment1.jpeg';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Footer from './Footer';

function Agent(){
    return <div className="body mb-5" style={{paddingTop:'100px;'}}><h6 style={{marginTop:'60px',textAlign:'center'}}>
    <Link to={"/"}>Home</Link> | Agents
    </h6>
<Row xs="12" sm="12" md="12" lg="12" className="bg2-section">
                    <p class="text-center mt-3"><h4>Our Agents</h4></p>
               <Col xs="12" sm="8" md="6" lg="3">
                    <div class="item">
                        <div class="offer-item">
                            <div class="offer-item-img">
                                <div class="gambo-overlay"></div>
                                <img  src={House1} style={{width:'230px'}}  alt="Second slide"/>
                            </div>
                            <h4>Zoena Singh</h4>
                            <span>Senior Sales Manager</span>
                            
                        </div>
                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="item">
                        <div class="offer-item">
                            <div class="offer-item-img">
                                <div class="gambo-overlay"></div>
                                <img  src={House1} style={{width:'230px'}}  alt="Second slide"/>
                            </div>
                            <h4>Zoena Singh</h4>
                            <span>Senior Sales Manager</span>
                            
                        </div>
                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="item">
                        <div class="offer-item">
                            <div class="offer-item-img">
                                <div class="gambo-overlay"></div>
                                <img  src={House1} style={{width:'230px'}}  alt="Second slide"/>
                            </div>
                            <h4>Zoena Singh</h4>
                            <span>Senior Sales Manager</span>
                            
                        </div>
                    </div>
                </Col>
                <Col xs="12" sm="8" md="6" lg="3">
                    <div class="item">
                        <div class="offer-item">
                            <div class="offer-item-img">
                                <div class="gambo-overlay"></div>
                                <img  src={House1} style={{width:'230px'}}  alt="Second slide"/>
                            </div>
                            <h4>Zoena Singh</h4>
                            <span>Senior Sales Manager</span>
                            
                        </div>
                    </div>
                </Col>
           </Row>
      <Footer />
    </div>;
}
export default Agent;