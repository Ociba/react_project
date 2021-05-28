import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Route,Switch,Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import MoreNews from './MoreNews';
function News() {
    return <div style={{textAlign:'center'}}>
             News
             <h2>Welcome to News Page</h2>
             <Container>
                <Row xs="12" sm="12" md="12" lg="12">
                    <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title style={{ color: "green" }}>Olanya Wins</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Olanya declared as a winner
                        </Card.Subtitle>
                        <Card.Text>
                           This was declared yesterday after the votes were counted; Olanya got 300, Kadaga 197 and Semujju trailed from behind with 15 otes..
                        </Card.Text>
                        <Link to="/morenews"> Read More</Link>
                        <Switch> <Route exact path="/add" component={MoreNews} /></Switch>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                    <Card.Body>
                        <Card.Title style={{ color: "green" }}>Olanya Wins</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Olanya declared as a winner
                        </Card.Subtitle>
                        <Card.Text>
                           This was declared yesterday after the votes were counted; Olanya got 300, Kadaga 197 and Semujju trailed from behind with 15 otes..
                        </Card.Text>
                        <Link to="/morenews"> Read More</Link>
                        <Switch> <Route exact path="/add" component={MoreNews} /></Switch>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                    <Card.Body>
                        <Card.Title style={{ color: "green" }}>Olanya Wins</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Olanya declared as a winner
                        </Card.Subtitle>
                        <Card.Text>
                           This was declared yesterday after the votes were counted; Olanya got 300, Kadaga 197 and Semujju trailed from behind with 15 otes..
                        </Card.Text>
                        <Link to="/morenews"> Read More</Link>
                        <Switch> <Route exact path="/add" component={MoreNews} /></Switch>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                    <Card.Body>
                        <Card.Title style={{ color: "green" }}>Olanya Wins</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Olanya declared as a winner
                        </Card.Subtitle>
                        <Card.Text>
                           This was declared yesterday after the votes were counted; Olanya got 300, Kadaga 197 and Semujju trailed from behind with 15 otes..
                        </Card.Text>
                        <Link to="/morenews"> Read More</Link>
                        <Switch> <Route exact path="/add" component={MoreNews} /></Switch>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>

    </div>;
}
 
export default News;