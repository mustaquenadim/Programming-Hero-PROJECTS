import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faShoppingBasket,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';

const AdminDash = () => {
    return (
        <div className='col-lg-3 bg-warning' style={{height: '100vh'}}>
            <h3 className='text-center p-3'>
                <Link className='fw-bold text-decoration-none text-dark' to='/'>iLearn</Link>
            </h3>
            <ul className='list-unstyled p-3'>
                    <li>
                        <Link to='/admin/orderList' className='text-decoration-none'>
                            <FontAwesomeIcon icon={faShoppingBasket} />Order List
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/addService' className='text-decoration-none'>
                            <FontAwesomeIcon icon={faPlus} /> Add Service
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/makeAdmin' className='text-decoration-none'>
                            <FontAwesomeIcon icon={faUserShield} /> Make Admin
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/manageServices' className='text-decoration-none'>
                            <FontAwesomeIcon icon={faServicestack} /> Manage Services
                        </Link>
                    </li>
                </ul>
        </div>
    );
};

export default AdminDash;