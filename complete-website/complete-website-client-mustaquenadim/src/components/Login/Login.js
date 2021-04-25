import React, { useContext } from 'react';
import LoginImg from '../../assets/login.jpg'
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
        <div className="container text-center my-5 py-5">
            <img src={LoginImg} alt="Login Page Pic" className='w-25' />
            <h1 className="pb-5">iLearn</h1>
            <button className='btn btn-warning rounded-pill text-danger fw-bold' onClick={handleGoogleSignIn}>
                <FontAwesomeIcon icon={faGoogle} /> Login with Google
            </button>
        </div>
    );
};

export default Login;