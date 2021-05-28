import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Route,Switch,Link} from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';
import Forms from './Forms';
import EditStudent from './EditStudent';
import '../App.css';
function Services() {
    return <div> <h3 style={{textAlign:'center'}}>Services</h3>
       <h2 style={{textAlign:'center'}}>Welcome to Contact us Page</h2>
       <Container>
           <Row sm="12" xs="12" md="12" lg="12">
       <>
  <h3 style={{textAlign:'right'}}>
    <Link to={"/add"}><Button variant="primary">Add Student</Button></Link>
    <Switch>
        <Route exact path="/add" component={Forms} />
    </Switch>
  </h3>
  <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th width="170">Student Name</th>
        <th width="170">Reg.no</th>
        <th width="170">Course</th>
        <th width="870">City Name</th>
        <th width="1950">Percentage</th>
        <th width="1950">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Rakesh</td>
        <td>1123</td>
        <td>CSE</td>
        <td>Mumbai</td>
        <td>86.9%</td>
        <td>
        <Link to={"/editStudent"}><Button variant="success">edit</Button> {''}</Link>
        <Switch>
          <Route exact path="/editStudent" component={EditStudent} />
        </Switch>
        <Button variant="danger">delete</Button>
        </td>
    
      </tr>
      <tr>
        <td>Jackson</td>
        <td>1124</td>
        <td>ECE</td>
        <td>Hyderabad</td>
        <td>72.4%</td>
        <td>
        <Link to={"/editStudent"}><Button variant="success">edit</Button> {''}</Link>
        <Switch>
          <Route exact path="/editStudent" component={EditStudent} />
        </Switch>
        <Button variant="danger">delete</Button>
        </td>
      </tr>
      <tr>
        <td>Keshav</td>
        <td>1124</td>
        <td>CSE</td>
        <td>Chennai</td>
        <td>88%</td>
        <td>
        <Link to={"/editStudent"}><Button variant="success">edit</Button> {''}</Link>
        <Switch>
          <Route exact path="/editStudent" component={EditStudent} />
        </Switch>
        <Button variant="danger">delete</Button>
        </td>
      </tr>
      <tr>
        <td>Neilesh Jain</td>
        <td>1125</td>
        <td>EEE</td>
        <td>Gwalior</td>
        <td>66.9%</td>
        <td>
        <Link to={"/editStudent"}><Button variant="success">edit</Button> {''}</Link>
        <Switch>
          <Route exact path="/editStudent" component={EditStudent} />
        </Switch>
        <Button variant="danger">delete</Button>
        </td>
      </tr>
      <tr>
        <td>Akbar sheikh</td>
        <td>1126</td>
        <td>Mechanical</td>
        <td>Indore</td>
        <td>96.5%</td>
        <td>
        <Link to={"/editStudent"}><Button variant="success">edit</Button> {''}</Link>
        <Switch>
          <Route exact path="/editStudent" component={EditStudent} />
        </Switch>
        <Button variant="danger">delete</Button>
        </td>
      </tr>
      <tr>
        <td>Sarita</td>
        <td>1127</td>
        <td>CSE</td>
        <td>Delhi</td>
        <td>96.9%</td>
        <td>
        <Link to={"/editStudent"}><Button variant="success">edit</Button> {''}</Link>
        <Switch>
          <Route exact path="/editStudent" component={EditStudent} />
        </Switch>
        <Button variant="danger">delete</Button>
        </td>
      </tr>
    </tbody>
  </Table>
      </>
      </Row>
      </Container>
    </div>
    ;
}
 
export default Services;