import React from 'react';

const Login = ({ authenticate }) => {
    return (
        <div className='login' >
            <h2>Log-in to create your Recipes !</h2>

            <button onClick={authenticate} className='facebook-button'>
                Log-In with Facebook
            </button>
        </div>
    )
}

export default Login