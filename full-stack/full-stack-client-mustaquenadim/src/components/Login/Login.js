import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                const {displayName, email, photoURL} = res.user;
                const signedInUser = {username: displayName, email, photo: photoURL};
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => console.log(error.message));
    };
    return (
        <div className="container text-center py-5">
            <button className='btn btn-danger rounded-pill' onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Login with Google</button>
        </div>
    );
};

export default Login;