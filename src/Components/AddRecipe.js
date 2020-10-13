import React, { Component } from 'react';

class AddRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: '',
          image: '',
          ingredients: '',
          instructions:''  
        }
    // Bind THIS to method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Change Multiple Inputs at Once
    handleChange(e) {
        const { name, value } = e.target;  
        this.setState({
            [name] : value
        })  
    }

    // Submit the Form
    handleSubmit(e) {
        e.preventDefault();
        const recipe = {  ...this.state }
        this.props.addRecipe(recipe);
        // Reset State
        Object.keys(recipe).forEach(item => {
            recipe[item] = ''
        })
        this.setState({ ...recipe })
    }

    render() {
        return (
            <div className='card'>
                <form 
                    className='admin-form ajouter-recette' 
                    onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.name} 
                        name='name' type='text' 
                        placeholder='Name of the recipe...' 
                    />
                    <input
                        onChange={this.handleChange} 
                        value={this.state.image}
                        name='image' type='text'
                        placeholder='Put an image...' 
                    />
                    <textarea
                        onChange={this.handleChange} 
                        name='ingredients'
                        value={this.state.ingredients} 
                        rows='3' 
                        placeholder='Type ingredients here...' 
                    />
                    <textarea
                        onChange={this.handleChange} 
                        name='instructions'
                        value={this.state.instructions} 
                        rows='15' 
                        placeholder='Type instructions here...' 
                    />
                </form>
                <button onClick={this.handleSubmit}>+ Add Recipe</button>
            </div>
        )
    }
}

export default AddRecipe