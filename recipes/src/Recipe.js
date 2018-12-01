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
        // const auth = {
        //     username: 'jill.z.meyerz@oracle.com',
        //     password: 'cloud00Cloud'
        // };
        
        // const url = `https://Integration999754-meyerzz.integration.ocp.oraclecloud.com:443/ic/api/integration/v1/flows/rest/FROMRESTTOTWILIO/1.0/app`;
        // axios.post(url, {
        //     request:[{
        //         to:+13108697473, 
        //         body:"HEY THERE"
        //     }], auth
        // })
        //     .then(
        //         response => {
        //             const results = response.data.hits;
        //             console.log(results);
                    
        //         },
        //         error => this.setState({ error: 'could not retrieve recipe info' })
        //     )
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
                    <Col md={10} mdOffset={1}>
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
                            <Button className="searchBtn searchBtn2" onClick={() => this.findRecipes()}>SEARCH</Button>
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
                                                        <div key={index} >
                                                            <li > {ingredient}</li>
                                                        </div>
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