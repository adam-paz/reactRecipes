import React, { Component } from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';

class Recipe extends Component {
    state = {
        ingredient: "",
        from: 0,
        to: 5
    }

    ingredientInput = input => this.setState({ ingredient: input.target.value });

    shareText = ()=>{

    }


    findRecipes = () => {
        const auth = {
            username: 'kseniya0213@gmail.com',
            password: 'test00test'
        };
        //const artistName = encodeURIComponent(this.state.artistName);
        const url = `https://api.edamam.com/search?q=${this.state.ingredient}&app_id=c3fb0406&app_key=75148353e31b6a420a1e1d9ff3d43a5e&from=${this.state.from}&to=${this.state.to}`;
        axios.get(url, auth)
            .then(
                response => {
                    const results = response.data.hits;
                    console.log(results);
                    this.setState({
                        recipes: results,
                        from:this.state.from +5, 
                        to:this.state.to +5
                    });
                },
                error => this.setState({ error: 'could not retrieve recipe info' })
            )
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={6} xsOffset={3}>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="What will you make today?"
                                name="search"
                                className="searchBar"
                                value={this.state.ingredient}
                                onChange={this.ingredientInput}
                            >
                            </input>
                            <Button bsStyle="info" className="searchBtn" onClick={() => this.findRecipes()}>SEARCH</Button>
                            <br></br>


                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9} xsOffset={1}>
                        {
                            this.state.recipes &&
                            <div className="cardWrapper">
                                {
                                    this.state.recipes.map((recipes, index) => (
                                        <div key={index} className="cardTop" >
                                        <a href={recipes.recipe.url} target="_blank">
                                                <img src={recipes.recipe.image} className="cardImage"></img>
                                            </a>
                                            <label>{recipes.recipe.label}</label>
                                            <div className="cardBtm ">
                                                <label>Ingredients</label>
                                                <ul className="tooltiptext">
                                                {        
                                                    recipes.recipe.ingredientLines.map((ingredient, index) => (
                                                            <li key={index}> {ingredient}</li>
                                                    ))
                                                }
                                                </ul>
                                            </div>
                                        </div>

                                    ))
                                }
                                <Button 
                                bsStyle="success" 
                                className="moreBtn"
                                onClick={()=> this.findRecipes()}
                                >Show More</Button>
                            </div>
                                
                        }
                    </Col>
                </Row>
            </div>
        )

    }


}
export default Recipe;