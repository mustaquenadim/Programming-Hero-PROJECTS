import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams();
    const [book, setBook] = useState([]);
    const dateTime = new Date().toLocaleString();

    useEffect(() => {
        fetch('https://apple-shortcake-30747.herokuapp.com/books')
            .then((res) => res.json())
            .then((data) => {
                const info = data.filter((book) => _id == book._id);
                setBook(info[0]);
            });
    }, [_id]);

    const handleOrder = () => {
        const {name, author, price, imageURL} = book;
        const newOrder = { ...loggedInUser, name, author, price, imageURL, dateTime };
        fetch('https://apple-shortcake-30747.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrder),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Your order has been placed successfully!')
            });
    };

    return (
        <div className='container py-3'>
            <h1>Checkout</h1>
            <h5>Date & Time: {dateTime}</h5>
            {book.length === 0 && (
                <div className='d-flex justify-content-center'>
                    <div className='spinner-border' role='status'>
                        <span className='visually-hidden'>
                            Loading...
                        </span>
                    </div>
                </div>
            )}
            <div className='card mb-3 p-3 bg-warning border-0'>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={book.imageURL} alt={book.name} className='w-100 book-cover' />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h4 className='card-title fw-bold text-danger'>{book.name}</h4>
                            <p className='card-text'>{book.author}</p>
                            <p className='card-text fs-4 fw-bold'>${book.price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary' onClick={handleOrder}>Order</button>
            <p className="text-danger">* After clicking 'Order' button wait a little bit for alert message.</p>
            <p className="text-danger">* Don't place any order more than one time.</p>
        </div>
    );
};

export default Checkout;
