import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-white fw-bold'>
                <div className='container'>
                    <Link to='/' className='navbar-brand fs-4 text-uppercase'>Let<span className='text-lowercase fw-normal'>'s</span> Ride</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                            <li className='nav-item px-3 mod'>
                                <Link to='/home' className='nav-link active'>Home</Link>
                            </li>
                            <li className='nav-item px-3 mod'>
                                <Link to='/destination/1' className='nav-link active'>Destination</Link>
                            </li>
                            {loggedInUser.displayName ? (
                                <li className='nav-item px-3 bg-success rounded-pill'>
                                    <h5 className='nav-link active text-white text-center'>
                                        {loggedInUser.displayName}
                                    </h5>
                                </li>
                            ) : (
                                <li className='nav-item px-3 btn-danger'>
                                    <Link to='/login' className='nav-link active text-white text-center'>Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
