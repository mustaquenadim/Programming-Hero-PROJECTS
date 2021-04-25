import React, { useEffect, useState } from 'react';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://protected-badlands-54605.herokuapp.com/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className='container py-3'>
            <h2 className='text-center'>Testimonials</h2>
            <div className='row g-4 py-5'>
                {reviews.map((review) => (
                    <div className='col-lg-4'>
                        <div className='card h-100 p-2 border-0 shadow'>
                            <div className='row'>
                                <div className='col-3'>
                                    <img
                                        src={review.photo}
                                        className='card-img-top book-cover rounded-circle'
                                        alt='...'
                                    />
                                </div>
                                <div className='col-9'>
                                    <h5>{review.name}</h5>
                                    <h6>{review.company}</h6>
                                </div>
                            </div>
                            <div className='card-body'>
                                <p className='card-text text-secondary'>
                                    {review.review}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
