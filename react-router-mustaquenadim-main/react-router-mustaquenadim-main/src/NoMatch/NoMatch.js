import React from 'react';

const NoMatch = () => {
    return (
        <div className='container'>
            <div class="alert alert-danger mt-5" role="alert">
                <h1 class="alert-heading">404 : Not found</h1>
                <hr></hr>
                <p>The server has not found anything matching the Request-URL.</p>
            </div>
        </div>
    );
};

export default NoMatch;