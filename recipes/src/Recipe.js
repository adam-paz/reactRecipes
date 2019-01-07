import React, { Component } from 'react';
import axios from 'axios';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Popup from 'reactjs-popup'
import Cards from './Cards.js'
// import findRecipe from './findRecipes.js' 


class Recipe extends Component {
    state = {
        ingredient: "",
        from: 0,
        to: 5,
        email: "",
        phone: ""
    }

    ingredientInput = input => this.setState({ ingredient: input.target.value });
    emailInput = input => this.setState({ email: input.target.value });
    phoneInput = input => this.setState({ phone: input.target.value });

    shareRecipe = (label, uri) => {

        const authorization = {
            username: 'jillz',
            password: 'cloud00Cloud',

        };
        const url = `https://demo-demomeetup.integration.ocp.oraclecloud.com:443/ic/api/integration/v1/flows/rest/REACTSHARE/1.0/recipe`;
        axios.post(url, {
                email: this.state.email,
                phone: "+1" + this.state.phone,
                label: label,
                body: "Here's a recipe from OraCooking: " + uri
            }, {
                auth: authorization
            })
            .then(
                response => {
                    const results = response.data.hits;
                    console.log(response);

                },
                error => {
                    this.setState({ error: 'could not retrieve recipe info' });
                    console.log(error);
                }
            )
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
                        from: this.state.from + 5,
                        to: this.state.to + 5
                    });
                },
                error => this.setState({ error: 'could not retrieve recipe info' })
            )
    }

    render() {
        return ( <
            div >
            <
            Row >
            <
            Col className = "search-container"
            lg = { 7 }
            lgOffset = { 2 }
            md = { 9 }
            mdOffset = { 1 }
            sm = { 10 }
            smOffset = { 1 }
            xs = { 10 }
            xsOffset = { 1 } >
            <
            input type = "text"
            placeholder = "What will you make today?"
            name = "search"
            className = "searchBar"
            value = { this.state.ingredient }
            onChange = { this.ingredientInput } >
            <
            /input> <
            /Col> <
            Col lg = { 2 }
            lgOffset = { 0 }
            md = { 1 }
            mdOffset = { 0 }
            sm = { 10 }
            smOffset = { 5 }
            xs = { 10 }
            xsOffset = { 4 } >
            <
            Button className = "searchBtn searchBtn2"
            onClick = {
                () => this.findRecipes() } > SEARCH < /Button> <
            /Col> <
            /Row>



            <
            Row className = "cardWrapper" >
            <
            Cards recipes = { this.state.recipes }
            /> <
            /Row>

            <
            Row >
            <
            Col lg = { 2 }
            lgOffset = { 5 }
            md = { 1 }
            mdOffset = { 0 }
            sm = { 10 }
            smOffset = { 5 }
            xs = { 10 }
            xsOffset = { 4 } >
            <
            Button bsStyle = "success"
            className = "moreBtn"
            onClick = {
                () => this.findRecipes() } >
            Show More < /Button> <
            /Col> <
            /Row> <
            /div>
        )

    }


}
export default Recipe;