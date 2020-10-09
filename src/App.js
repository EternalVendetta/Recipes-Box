import React, { Component } from 'react';
// CSS File
import './App.css';

// My Components


// Firebase

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { pseudo: this.props.match.params.pseudo }
  }

  // JSX Below
  render() {
    return (
    <div className='box'>
      <h1>Bonjour {this.state.pseudo}</h1>
        <div className='cards'>
          <div className='card'>
            <h2>One Menu</h2>
          </div>
        </div>
    </div>
    )
  }
}

export default App;
