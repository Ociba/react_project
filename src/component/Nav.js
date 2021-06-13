import { NavDropdown, Navbar} from 'react-bootstrap';
import image from '../logo.svg';
import {Switch,Link} from 'react-router-dom';
import '../App.css';
import '../index.css';
function Nav1(){
return (
/* <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
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
</Navbar> */
<header class="header clearfix">
<div class="sub-header-group">
                <div class="sub-header">
                    <Navbar class="navbar navbar-expand-lg navbar-light mb-5 py-3" collapseOnSelect expand="lg" fixed="top" bg="primary" variant="dark">
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
                        <div class="container-fluid">
                            <button class="navbar-toggler menu_toggle_btn" type="button" data-target="#navbarSupportedContent"><i class="uil uil-bars"></i></button>
                            <div class="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu" id="navbarSupportedContent">
                                <ul class="navbar-nav main_nav align-self-stretch">
                                    <li class="nav-item"><Switch><Link to="/" class="nav-link active" title="Home">Home</Link></Switch></li>
                                    <li class="nav-item"><Switch><Link to="/about" class="nav-link new_item" title="About">About</Link></Switch></li>
                                    <li class="nav-item"><Switch><Link to="/news" class="nav-link" title="News">News</Link></Switch></li>
                                    <li class="nav-item"><Switch><Link to="/agents" class="nav-link" title="Agent">Agent</Link></Switch></li>
                                    <li class="nav-item"><Switch><Link to="/contact" class="nav-link" title="Contact">Contact</Link></Switch></li>
                                    <NavDropdown className="link" title="Category" id="collasible-nav-dropdown">
                                      <NavDropdown.Item ><Switch><Link className="dropdowns" to="/houses">Houses</Link></Switch></NavDropdown.Item>
                                      <NavDropdown.Item ><Switch><Link className="dropdowns" to="/rooms">Rooms</Link></Switch></NavDropdown.Item>
                                      <NavDropdown.Item ><Switch><Link className="dropdowns" to="/hostels">Hostels</Link></Switch></NavDropdown.Item>
                                      <NavDropdown.Item ><Switch><Link className="dropdowns" to="/apartments">Apartment</Link></Switch></NavDropdown.Item>
                                      <NavDropdown.Item ><Switch><Link className="dropdowns" to="/plots">Plots</Link></Switch></NavDropdown.Item>
                                      <NavDropdown.Item ><Switch><Link className="dropdowns" to="/flat">Flat</Link></Switch></NavDropdown.Item>
                                      <NavDropdown.Item ><Switch><Link className="dropdowns" to="/land">Land</Link></Switch></NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item><Switch><Link className="dropdowns" to="/agents">Agents</Link></Switch></NavDropdown.Item>
                                      <NavDropdown.Item><Switch><Link className="dropdowns" to="/demo">Demo</Link></Switch></NavDropdown.Item>
                                  </NavDropdown>
                                    <li class="nav-item"><Switch><Link to="/login" class="nav-link" title="Login">Login</Link></Switch></li>
                                    <li class="nav-item"><Switch><Link to="/register" class="nav-link" title="Register">Register</Link></Switch></li>
                                </ul>
                            </div>
                        </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            </header>
);
}
export default Nav1;