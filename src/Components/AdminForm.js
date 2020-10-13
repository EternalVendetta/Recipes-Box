import React from 'react';

// Stateless Component
const AdminFrom = ({  id: key, updateRecipe, recettes }) => {
    const recette = recettes[key];

    const handleChange = (e, key) => {
        const { name, value } = e.target; 
        const recette = recettes[key]
        recette[name] = value;
        updateRecipe(key, recette) 
    }

    return (
        <div className='card'>
            <form className='admin-form'>
                <input value={recette.nom} onChange={e => handleChange(e, key)} type='text' name='nom' placeholder="Recipe's Name"
                />

                <input value={recette.image} onChange={e => handleChange(e, key)} type='text' name='image' placeholder="Image's Path"
                />

                <textarea value={recette.ingredients} onChange={e => handleChange(e, key)} name='ingredients' rows='3' placeholder='Ingredients List' 
                />

                <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name='instructions' rows='15' placeholder='Instructions List' 
                />
            </form>
            <button>Delete</button>
        </div>
    )
}

export default AdminFrom