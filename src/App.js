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

// StateFull Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pseudo: this.props.match.params.pseudo,
      recettes: {}
    }
    
  // Bind THIS to Meathods
    this.loadRecipe = this.loadRecipe.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
  }

  // Firebase
  componentDidMount() {
    this.ref = base.syncState( `/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes',
    })
  }
  
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadRecipe() {
    this.setState({ recettes })
  }

  addRecipe(recipe) {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recipe;
    this.setState({ recettes })
  }

  removeRecipe(key) {
    const recettes = { ...this.state.recettes }
    recettes[key] = null;
    this.setState({ recettes })
  }

  updateRecipe(key, newRecipe) {
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecipe;
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
            { cards }
          </div>
        <Admin
          recettes={this.state.recettes} 
          loadRecipe={this.loadRecipe}
          addRecipe={this.addRecipe}
          removeRecipe={this.removeRecipe}
          updateRecipe={this.updateRecipe}
        />
    </div>
    )
  }
}

export default App;
