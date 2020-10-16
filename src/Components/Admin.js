import React, { Component } from 'react';

// My Components
import AddRecipe from './AddRecipe';
import AdminForm from './AdminForm';
import Login from './Login';

// Firebase
import firebase, { auth } from 'firebase/app'
import 'firebase/auth';
import { firebaseApp } from '../base';
import base from '../base';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uid: null,
            chef: null,
        }

    // Bind THIS to Methods
    this.handleAuth = this.handleAuth.bind(this);
    }

    // Connexion Auto
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.handleAuth({ user });
            }
        })
    }
    
    handleAuth = async (authData) => {
        const box = await base.fetch(this.props.pseudo, { context: this })

        if (!box.chef) {
           await base.post(`${this.props.pseudo}/chef`, {
              data: authData.user.uid
           }) 
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    }

    authenticate = async () => {
        const authProvider = await new firebase.auth.FacebookAuthProvider();
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.handleAuth)
    }

    logout = async () => {
        console.log('Deconnexion');
        await firebase.auth().signOut();
        this.setState({ uid: null })
    }

    render() {
        // Props 
        const { addRecipe, loadRecipe, recettes, updateRecipe, removeRecipe } = this.props;
        // JSX Element
        const Logout = <button onClick={this.logout}>Log Out</button>

        if (!this.state.uid) {
            return <Login authenticate={this.authenticate}/>
        }

        if (this.state.uid !== this.state.chef) {
            return (
                <div>
                    <p>You're Not The Admin of this Box !</p>
                    {Logout}
                </div>
            )
        }

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
                    {Logout}
                    <button onClick={loadRecipe}>Fill In</button>
                </footer>
            </div>
        )
    }
}

export default Admin
