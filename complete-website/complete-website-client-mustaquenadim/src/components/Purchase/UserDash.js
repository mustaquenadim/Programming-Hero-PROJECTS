import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faList,
    faPaperPlane,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const UserDash = () => {
    return (
        <div className='col-lg-3 bg-warning' style={{height: '100vh'}}>
            <h3 className='text-center p-3'>
                <Link className='fw-bold text-decoration-none text-dark' to='/'>iLearn</Link>
            </h3>
            <ul className='list-unstyled p-3'>
                    <li>
                        <Link to='/purchase/purchase' className='text-decoration-none nav-link disabled'>
                            <FontAwesomeIcon icon={faShoppingCart} /> Purchase
                        </Link>
                    </li>
                    <li>
                        <Link to='/purchase/purchasedServiceList' className='text-decoration-none'>
                            <FontAwesomeIcon icon={faList} /> Purchased List
                        </Link>
                    </li>
                    <li>
                        <Link to='/purchase/review' className='text-decoration-none'>
                            <FontAwesomeIcon icon={faPaperPlane} /> Review
                        </Link>
                    </li>
                </ul>
        </div>
    );
};

export default UserDash;