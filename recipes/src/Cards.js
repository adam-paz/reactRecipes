import React, { Component } from 'react';
import axios from 'axios';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Popup from 'reactjs-popup'
import popupShare from './Popup';
import data from './Credentials.json'

const authorization = {
    username: 'jillz',
    password: 'cloud00Cloud',
};



class Cards extends Component {
    state = {
        email: "",
        phone: ""
    }

    emailInput = input => this.setState({ email: input.target.value });
    phoneInput = input => this.setState({ phone: input.target.value });


    shareRecipe = (label, uri) => {

    }
    // Our render for the cards component
    render() {
        return (
            <div>
                {
                    this.props.recipes &&
                    <Col lg={15} md={15} sm={15} xs={15} >
                        {
                            this.props.recipes.map((recipes, index) => (
                                <Col className="fullCard" lg={2} md={4} sm={5} xs={12} >
                                    <div key={index} className="cardTop" >

                                    {/* HERE IS OUR SHARE BUTTON POPUP*/}
                                        <Popup trigger={<button> Share</button>} position="bottom center">
                                            <p>Email</p>
                                            <input
                                                value={this.state.email}
                                                onChange={this.emailInput}
                                                placeholder="sample@sample.com"
                                                type="text" />
                                            <p>Phone no.</p>
                                            <input
                                                value={this.state.phone}
                                                onChange={this.phoneInput}
                                                placeholder="3101234567"
                                                type="text" />
                                            <button id="shareSubmit" onClick={() => this.shareRecipe(recipes.recipe.label, recipes.recipe.url)}> Send </button>
                                        </Popup>
                                    {/* END SHARE BUTTON */}

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
                                </Col>
                            ))
                        }

                    </Col>

                }
            </div>
        )
    }
}
export default Cards;