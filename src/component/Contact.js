import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Footer from './Footer';

function Contact() {
    return <div><h1 style={{textAlign:'center',marginTop:'60px'}}>Contact US</h1>
       <h2 style={{textAlign:'center'}}>Welcome to Contact us Page</h2>
       <div style={{textAlign:'left'}}>
       <Container>
           <Row xs="12" sm="12" md="12" lg="12">
              
               <form>
            <div class="form-row">
                <div class="form-group">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" id="inputEmail4"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                <label for="inputEmail4">Address</label>
                <input type="text" class="form-control" id="inputEmail4"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                <label for="inputEmail4">Contact</label>
                <input type="text" class="form-control" id="inputEmail4"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                <label for="inputEmail4">Message</label>
                <textarea type="text" rows="6" class="form-control" id="inputEmail4"></textarea>
                </div>
            </div>
            <div class="form-group text-center mt-4">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
           </Row>
       </Container>
       </div>
       <Footer />
    </div>
    ;
}
 
export default Contact;