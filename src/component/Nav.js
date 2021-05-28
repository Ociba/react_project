import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import image from './logo.svg';
import {Switch, Link} from 'react-router-dom';
import '../layouts/Nav.css';
function Nav1(){
return (
<>
<Navbar bg="success" variant="dark">
    <Navbar.Brand href="#home">
        <img
            alt=""
            src={image}
            width="40"
            height="40"
            className="d-inline-block align-top"
            />{' '}
        <>
        React Bootstrap
        </>{' '}
        <div className="right">
            <Switch>
                <Link to="/" className="link">
                Home</Link>
            </Switch>
            <Switch>
                <Link to="/about" className="link">
                About</Link>
            </Switch>
            <Switch>
                <Link to="/contact" className="link">
                Contact</Link>
            </Switch>
            <Switch>
                <Link to="/news" className="link">
                News</Link>
            </Switch>
            <Switch>
                <Link to="/services" className="link">
                Services</Link>
            </Switch>
        </div>
    </Navbar.Brand>
</Navbar>
</>
);
}
export default Nav1;