import React from 'react'
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import { Button } from 'bloomer'

const FirebaseLogin = (props) => {
    const { user, signOut, signInWithGoogle } = props;
    return (
        <div>
            {user ? <h1>Welcome, {user.displayName}</h1> : ''}
            {user ? (
                <Button isColor='primary' onClick={signOut}>Sign out</Button>
            ) : (
                    <Button isColor='primary' onClick={signInWithGoogle}>Sign in with Google</Button>
                )}
        </div>
    )
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(FirebaseLogin);
