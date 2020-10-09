import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pseudo: '',
            goToApp: false
        }
    // Bind THIS to Methods
    this.handleChange = this.handleChange.bind(this);
    this.goToApp = this.goToApp.bind(this);
    }

    // Change the value of State to TRUE
    goToApp(e) {
        e.preventDefault();
        this.setState({ goToApp: true });
    }

    // Change the PSEUDO State depends on Input's Value 
    handleChange(e) {
        this.setState({ pseudo: e.target.value });
    }

    // Check if the State is either true or false to Redirect
    render() {
        if (this.state.goToApp === true) {
            return <Redirect  push to = {`/pseudo/${this.state.pseudo}`} /> 
        }
    // JSX Below
        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.goToApp} >
                    <h1>My Recipes-Box</h1>
                    <input
                        type='text'
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                        placeholder='Nom du Chef'
                        pattern='[A-Za-z-]{1,}'
                        required />
                    <button type='submit'>GO</button>
                    <p>Not specials characters </p>
                </form>
            </div>
        )
    }
}

export default Connexion