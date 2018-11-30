import React, { Component } from 'react';
// import bg from './public/bg.jpg'
import './App.css';
import { Grid, Col, Row, Nav } from 'react-bootstrap';
import Recipe from './Recipe.js'

class App extends Component {
  render() {
    return (
      <div className="main"  >
        <div className="container">
          <Grid fluid>
            {/* Header Section */}
            <Row>
              <Col xs={4} xsOffset={4} id="headerCol">
                <Nav>
                  <a href = "/"><h1 className="title">OraCooking</h1></a>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col xs={8} xsOffset={2}>
                <Recipe/>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;