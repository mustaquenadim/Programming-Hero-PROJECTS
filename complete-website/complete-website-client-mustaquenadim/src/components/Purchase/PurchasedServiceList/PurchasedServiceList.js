import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import UserDash from '../UserDash';

const PurchasedServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [purchasedService, setPurchasedService] = useState([]);
    useEffect(() => {
        fetch('https://protected-badlands-54605.herokuapp.com/purchasedServices?email=' + loggedInUser.email)
            .then((res) => res.json())
            .then((data) => {
                setPurchasedService(data);
            });
    }, [loggedInUser.email]);
    return (
        <div className='row'>
            <UserDash></UserDash>
            <div className='col-lg-9'>
                <h1>Purchased Service List</h1>
                <div className='row g-4 container py-3'>
                    {purchasedService.length === 0 && (
                        <p>You have no orders yet!</p>
                    )}
                    {purchasedService.map((service) => (
                        <div className='col-lg-4'>
                            <div className='card h-100 p-3 border-0 shadow'>
                                <div className='card-body'>
                                    <div className='d-flex'>
                                        <h4 className='card-title fw-bold text-danger'>
                                            {service.title}
                                        </h4>
                                        <h4 className='col fs-5 fw-bold text-end'>
                                            ${service.price}
                                        </h4>
                                    </div>
                                    <p className='card-text text-secondary'>
                                        {service.description}
                                    </p>
                                    <button className='btn btn-success'>
                                        {service.status}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PurchasedServiceList;
