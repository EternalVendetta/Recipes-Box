import React from 'react'

// StateLess Components
const Card = ({ details }) => {

    const ingredients = details.ingredients
    .split(',')
    .map(item => <li key={item}>{item}</li>)

    const instructions = details.instructions
    .split('\n')
    .map(item => <li key={item}>{item}</li>)

    const requirePath = path =>{
        try {
            return require(`../img/${path}`)
        } catch (error) {
            return require(`../img/default.jpeg`)
        }
    }

    return (
        <div className='card'>
            <div className='image'>
                <img src={requirePath(details.image)} alt='images' />
            </div>
            <div className='recette'>
                <h2>{details.nom}</h2>
                <ul className='liste-ingredients'>
                    {ingredients}
                </ul>
                <ol className='liste-instructions'>
                    {instructions}
                </ol>
            </div>
        </div>
    )
}

export default Card