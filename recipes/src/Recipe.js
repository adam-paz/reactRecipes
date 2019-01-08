import React, { Component } from 'react';
import axios from 'axios';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Cards from './Cards.js'
import data from './test.json'


class Recipe extends Component {
    // This is our state, where we store and initialize information for the component
    state = {
        ingredient: "",
        from: 0,
        to: 5,
        email: "",
        phone: ""
    }

    ingredientInput = input => this.setState({ ingredient: input.target.value });

// This is our api call to Edamam. Edamam provides information about a recipe such as the ingredients and a url to the recipe

    findRecipes = () => {
        // Here is our Axios Call for the edamam api
        const auth = { //This is our authentication for our api
            username: data.usernameEdamam,
            password: data.passwordEdamam
        };
        const url = `https://api.edamam.com/search?q=${this.state.ingredient}&app_id=c3fb0406&app_key=75148353e31b6a420a1e1d9ff3d43a5e&from=${this.state.from}&to=${this.state.to}`;
        //This is a paramater for the axios call also, this is the url for the api. It is like the access point
        axios.get(url, auth)
            .then(
                response => {
                    const results = response.data.hits;
                    console.log(results);
                    this.setState({
                        recipes: results,
                        from: this.state.from + 5,
                        to: this.state.to + 5
                    });
                },
                error => this.setState({ error: 'could not retrieve recipe info' })
            )
    }
    //Here is our render for this component.
    render() {
        return (
            <div>
                <Row>
                    <Col className="search-container" lg={7} lgOffset={2} md={9} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
                    {/* Search Bar */}
                        <input
                            type="text"
                            placeholder="What will you make today?"
                            name="search"
                            className="searchBar"
                            // Example of updating the state *******
                            value={this.state.ingredient}
                            onChange={this.ingredientInput}
                        >
                        </input>
                    </Col>
                    <Col lg={2} lgOffset={0} md={1} mdOffset={0} sm={10} smOffset={5} xs={10} xsOffset={4}>
                        {/* Button to call the Edamam API */}
                        <Button className="searchBtn searchBtn2" onClick={() => this.findRecipes()}>SEARCH</Button>
                    </Col>
                </Row>
                <Row className="cardWrapper" >
                    {/* Calling our cards componenent and passing it the information to recipes. */}
                    <Cards recipes = {this.state.recipes}/>
                </Row>

                <Row>
                    <Col lg={2} lgOffset={5} md={1} mdOffset={0} sm={10} smOffset={5} xs={10} xsOffset={4}>
                        <Button
                            bsStyle="success"
                            className="moreBtn"
                            onClick={() => this.findRecipes()}
                        >Show More</Button>
                    </Col>
                </Row>
            </div>
        )

    }


}
export default Recipe;