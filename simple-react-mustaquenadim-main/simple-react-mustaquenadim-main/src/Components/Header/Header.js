import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand brand-text' href='#'>
                    TSU
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#'>
                                Home <span className='sr-only'>(current)</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Defender
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Midfieler
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Striker
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Transfer Shortlist
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Wage
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='text-center'>
                <h1>The Strikers United</h1>
            </div>
            <hr></hr>
        </div>
    );
};

export default Header;
