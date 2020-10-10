import React, { Component } from 'react';
// CSS File
import './App.css';

// My Components
import Header from './Components/Header';
import Admin from './Components/Admin';
import Card from './Components/Card';

// Recipes Object
import './recettes';
import recettes from './recettes';

// Firebase
import base from './base';
import { firebaseApp } from './base';

// StateFull Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pseudo: this.props.match.params.pseudo,
      recettes: {}
    }
  // Bind THIS to Meathods
    this.addRecipe = this.addRecipe.bind(this);
  }

  componentDidMount() {
    this.ref = base.syncState( `/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes',
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addRecipe() {
    this.setState({ recettes })
  }

  render() { 
    const cards = Object.keys(this.state.recettes).map(key => {
      return <Card key={key} details={this.state.recettes[key]} />
    })
    
  // JSX Below
    return (
    <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
          <div className='card'>
            <h2>{cards}</h2>
          </div>
        </div>
        <Admin addRecipe={this.addRecipe} />
    </div>
    )
  }
}

export default App;
