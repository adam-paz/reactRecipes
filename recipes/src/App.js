import React, { Component } from 'react';
// import bg from './public/bk.png'
import './App.css';
import { Grid, Col, Row, Nav } from 'react-bootstrap';
import Recipe from './Recipe.js'

class App extends Component {
  render() {
    return (
      <div className="main"  >
        <div className="container">
          <Grid>
            {/* Header Section */}
            <Row>
              <Col lg={4} lgOffset={4} md={4} mdOffset={4} sm={4} smOffset={4}  xs={4}  xsOffset={3} id="headerCol">
                <Nav>
                  <a href = "/"><h1 className="title">OraCooking</h1></a>
                </Nav>
              </Col>
            </Row>

                <Recipe/>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;