import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const Manage = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://apple-shortcake-30747.herokuapp.com/books')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
            });
    }, []);
    const handleDeleteBook = (id) => {
        const url = `https://apple-shortcake-30747.herokuapp.com/deleteBook/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    return (
        <div className='container py-3'>
            <table className='table table-hover'>
                <thead>
                    <tr className='table-info'>
                        <th scope='col'>Book Name</th>
                        <th scope='col'>Author Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr>
                            <th scope='row'>{book.name}</th>
                            <td>{book.author}</td>
                            <td>${book.price}</td>
                            <td className="d-flex">
                                <button className='btn btn-warning mx-1'>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button className='btn btn-danger mx-1' onClick={() => handleDeleteBook(book._id)}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Manage;
