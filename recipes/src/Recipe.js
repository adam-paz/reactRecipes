import React, { Component } from 'react';
import axios from 'axios';
import { Button, Row } from 'react-bootstrap';

class Recipe extends Component {
    state = {
        ingredient: "",
        from: 0,
        to: 5
    }

    ingredientInput = input => this.setState({ ingredient: input.target.value });

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
                        recipes: results
                    });
                },
                error => this.setState({ error: 'could not retrieve recipe info' })
            )
    }

    render() {
        return (
            <div>
                <Row>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="What will you make today?"
                            name="search"
                            value={this.state.ingredient}
                            onChange={this.ingredientInput}
                        >
                        </input>
                        <Button bsStyle="primary" onClick={() => this.findRecipes()}>SEARCH</Button>
                        <br></br>

           
                </div>
                </Row>
                <Row>
                {
                    this.state.recipes &&
                    <div className="cardWrapper">
                        {
                            this.state.recipes.map((recipes, index) => (
                                <div key={index} className="card">
                                    <label>{recipes.recipe.label}</label>
                                    <a href={recipes.recipe.url} >
                                        <img src={recipes.recipe.image}></img>
                                    </a>
                                </div>

                            ))
                        }
                    </div>
                }
                </Row>
            </div>
        )

    }


}
export default Recipe;