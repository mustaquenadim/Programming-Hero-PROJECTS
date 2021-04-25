import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import AdminDash from '../SideNav/AdminDash';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://protected-badlands-54605.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    });
    const handleDeleteService = (id) => {
        const url = `https://protected-badlands-54605.herokuapp.com/deleteService/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert('Service deleted successfully!');
            });
    };
    return (
        <div className='row'>
            <AdminDash></AdminDash>
            <div className='col-lg-9'>
                <h2>Manage Services</h2>
                <div className='container py-3'>
                    <table className='table table-hover table-borderless'>
                        <thead className='table-secondary text-center border-0'>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr>
                                    <th scope='row'>{service.title}</th>
                                    <td>${service.price}</td>
                                    <td className='d-flex justify-content-center'>
                                        <button className='btn btn-danger mx-1' onClick={() => handleDeleteService(service._id)}>
                                            <FontAwesomeIcon icon={faTrashAlt}/> Delete
                                        </button>
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

export default ManageServices;
