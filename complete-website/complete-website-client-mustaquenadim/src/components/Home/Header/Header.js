import React from 'react';
import HeaderDisplay from './HeaderDisplay/HeaderDisplay';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderDisplay></HeaderDisplay>
        </div>
    );
};

export default Header;