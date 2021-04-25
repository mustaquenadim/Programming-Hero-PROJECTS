import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://apple-shortcake-30747.herokuapp.com/books')
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);
    return (
        <div className='container py-3'>
            <div className='row g-4'>
                {books.length === 0 && (
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-border' role='status'>
                            <span className='visually-hidden'>Loading...</span>
                        </div>
                    </div>
                )}
                {books.map((book) => (
                    <Book book={book}></Book>
                ))}
            </div>
        </div>
    );
};

export default Home;
