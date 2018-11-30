import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Recipe from './Recipe.js'

class Search extends Component {
    state = {
        ingredient:"",
        ingredientInput:""
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
        return(
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
                    <Button bsStyle="primary" onClick={() => this.findRecipes()}>SEARCH</Button>
                    <br></br>


                </div>
     )
    }
}

export default Search;