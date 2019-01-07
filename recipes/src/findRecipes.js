import axios from 'axios';

export default findRecipe = () => {
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
                return results;
            },
            error => this.setState({ error: 'could not retrieve recipe info' })
        )
}

exports.findRecipe = findRecipe;