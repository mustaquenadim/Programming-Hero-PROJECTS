import React from 'react';
import { Link } from 'react-router-dom';

const Books = (props) => {
    const { _id, name, author, price, imageURL} = props.book;
    return (
        <div className="col-lg-4">
            <div className="card h-100 p-3 bg-warning border-0 shadow">
                <img src={imageURL} className="card-img-top book-cover" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title fw-bold text-danger">{name}</h5>
                    <p className="card-text">{author}</p>
                </div>
                <div className="card-footer border-0 bg-transparent">
                    <div className="row">
                        <div className="col fs-4 fw-bold">${price}</div>
                        <div className="col">
                            <Link to={`/checkout/${_id}`} className="btn btn-success">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;