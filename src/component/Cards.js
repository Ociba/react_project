import React from "react";
import logo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Row, Col, Button} from "react-bootstrap";

function CardDisplay() {
  return (
    <div className="row mt-4 m-0">
        <div className="col-md-3">
            <Card>
                <Row className='gutters'>
                <Col>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title><Card.Img variant="top" className="logo" src={logo} /></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Col>
                </Row>
            </Card>
        </div>
        <div className="col-md-3">
            <Card>
                <Row className='gutters'>
                <Col>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title><Card.Img variant="top" className="logo" src={logo} /></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Col>
                </Row>
            </Card>
        </div>
        <div className="col-md-3">
            <Card>
                <Row className='gutters'>
                <Col>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title><Card.Img variant="top" className="logo" src={logo} /></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Col>
                </Row>
            </Card>
        </div>
        <div className="col-md-3">
            <Card>
                <Row className='gutters'>
                <Col>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title><Card.Img variant="top" className="logo" src={logo} /></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Col>
                </Row>
            </Card>
        </div>
    </div>
  );
}
function Cards() {
  return (
    <div>
      <CardDisplay />
    </div>
  );
}

export default Cards;