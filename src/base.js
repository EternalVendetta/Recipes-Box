import Rebase from 're-base'
import firebase from 'firebase'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: 'xxx',
    authDomain: 'xxx',
    databaseURL: 'xxx'
})

const base = Rebase.createClass(firebaseApp.database())

// Named export 
export { firebaseApp }

// Default export
export default base