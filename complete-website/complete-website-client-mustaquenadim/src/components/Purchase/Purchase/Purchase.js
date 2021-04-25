import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import { UserContext } from '../../../App';
import { useHistory, useParams } from 'react-router-dom';
import UserDash from '../UserDash';

const Purchase = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams();
    const [service, setService] = useState([]);
    const {register, handleSubmit} = useForm();
    const [payment, setPayment] = useState({});

    useEffect(() => {
        fetch('https://protected-badlands-54605.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => {
                const info = data.filter((service) => _id == service._id);
                setService(info[0]);
            });
    }, [_id]);

    // const onSubmit = (data) => {
    //     console.log(data);
    //     const { imageURL, title, description, price } = service;
    //     const newPurchase = {...loggedInUser, name: data.name, email: data.email, imageURL, title, description, price, status: 'Pending'};
    //     const url = 'https://protected-badlands-54605.herokuapp.com/purchaseService';
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(newPurchase),
    //     }).then((res) => {
    //         alert('Service purchased successfully!');
    //     });
    // };
    console.log(payment);

    useEffect(() => {
        if (payment.status)
        {
            const { imageURL, title, description, price } = service;
            const newPurchase = {...loggedInUser, imageURL, title, description, price, status: 'Pending', paymentId: payment.paymentId};
            const url = 'https://protected-badlands-54605.herokuapp.com/purchaseService';
            fetch(url, {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(newPurchase),
            }).then((res) => {
                if(res)
                {
                    // alert('Service purchased successfully!');
                    history.push('/purchase/purchasedServiceList');
                }
            });
        }
        else if(payment.error)
        {
            alert(payment.error);
        }
    }, [loggedInUser, payment, history])

    return (
        <div className='row'>
            <UserDash></UserDash>
            <div className='col-lg-9'>
                <h1>Purchase</h1>
                {/* <form onSubmit={handleSubmit} className='p-3 rounded-3'> */}
                    <div className='col-lg-6'>
                        <div className='mb-3'>
                            <input type='text' className='form-control' name='name' id='name' placeholder='Enter Name' defaultValue={loggedInUser.username} {...register('name')} disabled />
                        </div>
                        <div className='mb-3'>
                            <input type='email' className='form-control' name='email' id='email' placeholder='Enter Email' defaultValue={loggedInUser.email} {...register('email')} disabled />
                        </div>
                        <div className='mb-3'>
                            <input type='text' className='form-control' name='service' id='service' placeholder='Enter Service' defaultValue={service.title} {...register('service')} disabled />
                        </div>
                        <p>Your service charge will be ${service.price}</p>
                        <div className='mb-3'>
                            <PaymentProcess setPayment={setPayment}></PaymentProcess>
                        </div>
                    </div>
                {/* </form> */}
            </div>
        </div>
    );
};

export default Purchase;
