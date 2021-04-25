import React, { useEffect, useState } from 'react';
import AdminDash from '../SideNav/AdminDash';

const OrderList = () => {
    const [purchasedService, setPurchasedService] = useState([]);
    useEffect(() => {
        fetch('https://protected-badlands-54605.herokuapp.com/adminPurchasedServices')
            .then((res) => res.json())
            .then((data) => {
                setPurchasedService(data);
            });
    }, []);

    const changeStatus = ({ target: { value: statusValue } }, id) => {
        fetch(`https://protected-badlands-54605.herokuapp.com/getOrder/${id}`)
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    fetch('https://protected-badlands-54605.herokuapp.com/updateOrderStatus',
                        {
                            method: 'PATCH',
                            body: JSON.stringify({ ...result, status: statusValue}),
                            headers: {
                                'Content-type' : 'application/json; charset=UTF-8',
                            },
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            if (data) {
                                alert('Your status has been updated!')
                            };
                        });
                }
            });
    };

    return (
        <div className='row'>
            <AdminDash></AdminDash>
            <div className='col-lg-9'>
                <h2>Order List</h2>
                <div className='container py-3'>
                    <table className='table table-hover table-borderless'>
                        <thead className='table-secondary text-center border-0'>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Service</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Payment ID</th>
                                <th scope='col' width='200px'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchasedService.map((service) => (
                                <tr>
                                    <td>{service.username}</td>
                                    <td>{service.email}</td>
                                    <td>{service.title}</td>
                                    <td>${service.price}</td>
                                    <td>{service.paymentId}</td>
                                    <td>
                                        <select className='form-select' onChange = {(e) => changeStatus(e, service._id)} defaultValue={service.status} name='status'>
                                            <option value='Pending' className='text-danger'>Pending</option>
                                            <option value='On Going' className='text-warning'>On Going</option>
                                            <option value='Done' className='text-success'>Done</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;
