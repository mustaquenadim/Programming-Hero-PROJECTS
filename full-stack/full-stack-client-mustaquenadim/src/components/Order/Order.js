import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(
            'https://apple-shortcake-30747.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email]);
    return (
        <div className='container'>
            <h1>Orders ({orders.length})</h1>
            <div>
                <h4>Name: {loggedInUser.username}</h4>
                <h5>Email: {loggedInUser.email}</h5>
            </div>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr className='text-center table-info'>
                        <th scope='col'>Book Name</th>
                        <th scope='col'>Author Name</th>
                        <th scope='col'>Price</th>
                        <th>Order Time</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length === 0 && (
                        <div className='d-flex justify-content-center'>
                            <div className='spinner-border' role='status'>
                                <span className='visually-hidden'>
                                    Loading...
                                </span>
                            </div>
                        </div>
                    )}
                    {orders.map((order) => (
                        <tr>
                            <th scope='row'>{order.name}</th>
                            <td>{order.author}</td>
                            <td>${order.price}</td>
                            <td>{order.dateTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Order;
