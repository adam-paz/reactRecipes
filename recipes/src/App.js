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
                  <h1>OraCooking</h1>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col xs={6} xsOffset={3}>
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