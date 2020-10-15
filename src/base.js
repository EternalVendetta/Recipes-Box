import Rebase from 're-base'
import firebase from 'firebase'
import 'firebase/database'

export const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBo5LBxY_hEV82wnTqkmFqeMIw--lOwV58',
    authDomain: 'eternal-recipes-box.firebaseapp.com',
    databaseURL: 'https://eternal-recipes-box.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// Named export 

// Default export
export default base