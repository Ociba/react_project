import React from 'react';
import {Row, Col} from 'react-bootstrap';
import House1 from './apartment1.jpeg';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Ociba  from './ociba.jpg';
import Ociba2  from './ociba2.jpg';

function Blog(){
    return <div className="body"><h3 style={{textAlign:'center'}}>
         Home | Blog
    </h3>
    <Row xs="12" sm="12" md="12" lg="12">
       <Col xs="12" sm="12" md="6" lg="3">
            <div class="card mb-3 text-secondary">
            <div class="card-body">
            <p class="btn-block btn-success text-center p-2">Categories</p>
            <hr></hr>
            <strong>Property</strong>
            <hr></hr>
            <p>Houses  <span style={{float:'right',color:'green'}}>426</span></p>
            <hr></hr>
            <p>Apartments <span style={{float:'right',color:'green'}}>46</span></p>
            <hr></hr>
            <p>Land  <span style={{float:'right',color:'green'}}>526</span></p>
            <hr></hr>
            <p>Plot  <span style={{float:'right',color:'green'}}>426</span></p>
            <hr></hr>
            <p> Others  <span style={{float:'right',color:'green'}}>1126</span></p>
            <hr></hr>
            </div>
            </div>
            <div class="card mb-3 text-secondary">
            <div class="card-body">
            <p class="btn-block btn-success text-center p-2">Recent Posts</p>
            <hr></hr>
            <p><img  src={House1} style={{width:'50px',height:'50px'}}  alt="Second slide"/>  <span style={{float:'right'}}>House & Apartment for Rent <p class="mt--1 text-success">26 June, 2021 4 hours</p></span></p>
            <hr></hr>
            <p><img  src={House1} style={{width:'50px',height:'50px'}}  alt="Second slide"/>  <span style={{float:'right'}}>House & Apartment for Rent <p class="mt--1 text-success">26 June, 2021 4 hours</p></span></p>
            <hr></hr>
            <p><img  src={House1} style={{width:'50px',height:'50px'}}  alt="Second slide"/>  <span style={{float:'right'}}>House & Apartment for Rent <p class="mt--1 text-success">26 June, 2021 4 hours</p></span></p>
            <hr></hr>
            <p><img  src={House1} style={{width:'50px',height:'50px'}}  alt="Second slide"/>  <span style={{float:'right'}}>House & Apartment for Rent <p class="mt--1 text-success">26 June, 2021 4 hours</p></span></p>
            <hr></hr>
            <p><img  src={House1} style={{width:'50px',height:'50px'}}  alt="Second slide"/>  <span style={{float:'right'}}>House & Apartment for Rent <p class="mt--1 text-success">26 June, 2021 4 hours</p></span></p>
            <hr></hr>
            <p><img  src={House1} style={{width:'50px',height:'50px'}}  alt="Second slide"/>  <span style={{float:'right'}}>House & Apartment for Rent <p class="mt--1 text-success">26 June, 2021 4 hours</p></span></p>
            <hr></hr>
            </div>
            </div>
            <div class="card mb-3 text-secondary">
            <div class="card-body">
            <p class="btn-block btn-success text-center p-2">Tags</p>
            <hr></hr>
            <strong>Property Available</strong>
            <div class="cntct-social">
            <div class="team-social tagcloud">
            <Link to={"/houses"}class="tag-cloud-link tag-link-position-1 hover-btn">Houses</Link>
            <Link to={"/apartments"} class="tag-cloud-link tag-link-position-1 hover-btn">Apartments</Link>
            <Link to={"/plots"} class="tag-cloud-link tag-link-position-1 hover-btn">Plots</Link>
            <Link to={"/land"} class="tag-cloud-link tag-link-position-1 hover-btn">Land</Link>
            <Link to={"/flat"} class="tag-cloud-link tag-link-position-1 hover-btn">Flats</Link>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Bungalow</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Mini-Flat</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Mansion</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Penthouse</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Room</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Parlou</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Shared Apartment</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Duplex</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Block of Flats</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Chalet</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Condo</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Farm House</a>
            <a href="#ff" class="tag-cloud-link tag-link-position-1 hover-btn">Manssionette</a>
            </div></div>
            <hr></hr>
            </div>
            </div>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6">
            <div class="card mb-3 text-secondary">
            <div class="card-body">
            <img  src={House1} style={{width:'380px'}}  alt="Second slide"/>
            <hr></hr>
            <strong>Property</strong>
            <p>House & Apartment for Rent | 426</p>
            <p>House & Apartment for Sale | 123</p>
            <p>Land  & Plot for Rent | 56</p>
            <p>Land  & Plot for Sale | 445</p>
            <p class="text-success">Show All 8</p>
            <hr></hr>
            </div>
            </div>
            <Row >
                <p><img src={Ociba} style={{borderRadius:'50%'}} width="40" height="40" alt=""/><span> Ociba James 2 hours</span></p>
                
                <p>Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                <hr></hr>
                <p><img src={Ociba2} style={{borderRadius:'50%'}} width="40" height="40" alt=""/><span> Ojinga Aaron Ociba 4 hours</span></p>
                <p>Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                <hr></hr>
                <p><img src={Ociba} style={{borderRadius:'50%'}} width="40" height="40" alt=""/><span> Oliba Moses Ociba 2 hours</span></p>
                <p>Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
            </Row>
            <Row className="bg2-section ">
            <h3>Leave Comment</h3> 
            <div class="card mb-3">
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
                            <button type="submit" class="btn btn-primary">Comment</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </Row>
        </Col>
        <Col xs="12" sm="12" md="6" lg="3">
            <div class="card mb-3 text-secondary">
            <div class="card-body m-2">
            <img  src={House1} style={{width:'270px'}}  alt="Second slide"/>
            <hr></hr>
            <strong>Property Details</strong>
            <p>House & Apartment for Rent | 426</p>
            <p>House & Apartment for Sale | 123</p>
            <p>Land  & Plot for Rent | 56</p>
            <p>Land  & Plot for Sale | 445</p>
            <p class="text-success">Show All 8</p>
            <hr></hr>
            </div>
            </div>
            <div class="card mb-3 text-secondary">
            <div class="card-body m-2">
            <img  src={House1} style={{width:'270px'}}  alt="Second slide"/>
            <hr></hr>
            <strong>Property Details</strong>
            <p>House & Apartment for Rent | 426</p>
            <p>House & Apartment for Sale | 123</p>
            <p>Land  & Plot for Rent | 56</p>
            <p>Land  & Plot for Sale | 445</p>
            <p class="text-success">Show All 8</p>
            <hr></hr>
            </div>
            </div>
            <div class="card mb-3 text-secondary">
            <div class="card-body m-2">
            <img  src={House1} style={{width:'270px'}}  alt="Second slide"/>
            <hr></hr>
            <strong>Property Details</strong>
            <p>House & Apartment for Rent | 426</p>
            <p>House & Apartment for Sale | 123</p>
            <p>Land  & Plot for Rent | 56</p>
            <hr></hr>
            </div>
            </div>
        </Col>
    </Row>
    <Footer />
    </div>;
}
export default Blog;