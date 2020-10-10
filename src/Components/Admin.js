import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (
            <footer>
                <button onClick={this.props.addRecipe}>Fill In</button>
            </footer>
        )
    }
}

export default Admin
