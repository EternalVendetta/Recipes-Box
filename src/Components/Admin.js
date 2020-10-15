import React, { Component } from 'react';

// My Components
import AddRecipe from './AddRecipe';
import AdminForm from './AdminForm';

class Admin extends Component {
    render() {
        const { addRecipe, loadRecipe, recettes, updateRecipe, removeRecipe } = this.props;

        return (
            <div className='card'>
                <AddRecipe 
                    addRecipe={addRecipe} />
                {
                    Object.keys(recettes).map(key => {
                        return <AdminForm 
                                    key={key}
                                    id={key}
                                    recettes={recettes} 
                                    updateRecipe={updateRecipe}
                                    removeRecipe={removeRecipe} 
                                />;
                    })
                }
                <footer>
                    <button onClick={loadRecipe}>Fill In</button>
                </footer>
            </div>
        )
    }
}

export default Admin
