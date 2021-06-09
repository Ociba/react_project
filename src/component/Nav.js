import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import image from '../logo.svg';
import {Switch, Link} from 'react-router-dom';
import '../App.css';
import '../index.css';
function Nav1(){
return (
<Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
  <Navbar.Brand href="#home"> <img
            alt=""
            src={image}
            width="40"
            height="30"
            margin-right=" "
            className="d-inline-block align-top"
            />{' '} JJ Consultants
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Switch><Link className="link" to="/">Home</Link></Switch></Nav.Link>
      <Nav.Link><Switch><Link className="link" to="/about">About</Link></Switch></Nav.Link>
      <NavDropdown className="link" title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Switch><Link className="dropdowns" to="/houses">Houses</Link></Switch></NavDropdown.Item>
        <NavDropdown.Item ><Switch><Link className="dropdowns" to="/apartments">Apartment</Link></Switch></NavDropdown.Item>
        <NavDropdown.Item ><Switch><Link className="dropdowns" to="/plots">Plots</Link></Switch></NavDropdown.Item>
        <NavDropdown.Item ><Switch><Link className="dropdowns" to="/flat">Flat</Link></Switch></NavDropdown.Item>
        <NavDropdown.Item ><Switch><Link className="dropdowns" to="/land">Land</Link></Switch></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><Switch><Link className="dropdowns" to="/agents">Agents</Link></Switch></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><Switch><Link className="link" to="/news">News</Link></Switch></Nav.Link>
      <Nav.Link><Switch><Link className="link" to="/contact">Contact</Link></Switch></Nav.Link>
    </Nav>
    <Nav>
     <Nav.Link><Switch><Link className="link" to="/blog">Blog</Link></Switch></Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
);
}
export default Nav1;