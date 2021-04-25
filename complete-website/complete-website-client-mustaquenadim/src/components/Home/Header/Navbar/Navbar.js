import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://protected-badlands-54605.herokuapp.com/checkUserRole?email=' + loggedInUser.email)
            .then((res) => res.json())
            .then((data) => {
                setIsAdmin(data);
            });
    }, [loggedInUser.email]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">iLearn</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/contact">Contact</Link>
                        </li>

                        { (loggedInUser?.username) ? (isAdmin) ? (
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/orderList">Admin</Link>
                        </li>) : (
                        <li className="nav-item">
                            <Link className="nav-link" to="/purchase/purchasedServiceList">User</Link>
                        </li>) : "" }

                        {!loggedInUser.username ? (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <h6 className="nav-link fw-bolder">{loggedInUser.username}</h6>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;