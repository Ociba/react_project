import React from 'react';
import {Row, Col} from 'react-bootstrap';
import House1 from './apartment1.jpeg';

function Blog(){
    return <div className="body"><h3 style={{textAlign:'center'}}>
         Home | Blog
    </h3>
    <Row xs="12" sm="12" md="12" lg="12">
       <Col xs="12" sm="12" md="6" lg="4">
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
        </Col>
        <Col xs="12" sm="12" md="6" lg="8">
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
            <p class="text-secondary text-center bg-black">13 Decimals 4Bedrooms 3Bathrooms 2Garages</p>
            <p class="text-secondary text-center">2 Block Apartments For Sale In Kisaasi on 38 Decimals Ready Privete Mailo Land Title Selling 2.8billions</p>
            </div>
        </Col>
    </Row>
    </div>;
}
export default Blog;