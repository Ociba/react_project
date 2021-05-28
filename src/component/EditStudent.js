import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row} from 'react-bootstrap';

function EditStudent() {
    return  <div ><h6 style={{textAlign:'center'}}>EditStudent</h6>
       <h2 style={{textAlign:'center'}}>Edit Student Details Now</h2>
       <Container>
           <Row xs="12" sm="12" md="12" lg="12">
       <form class="form-horizontal" >
        <div class="form-group">
            <label class="control-label" for="email">Name:</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="email" placeholder="Enter email"/>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label" for="pwd">Registration Number:</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="pwd" placeholder="Enter password"/>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label" for="pwd">Course:</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="pwd" placeholder="Enter password"/>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label" for="pwd">City Name:</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="pwd" placeholder="Enter password"/>
            </div>
        </div>
        <div class="form-group">
            <label class="control-label" for="pwd">Percentage:</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="pwd" placeholder="Enter password"/>
            </div>
        </div>
        <div class="form-group text-center mt-3">
            <div class="">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
        </form>
        </Row>
       </Container>
    </div>
    
    ;
}
 
export default EditStudent;