import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='text-center'>
            <div className='card-body'>
                <blockquote className='blockquote mb-0'>
                    <p>“Work hard in silence, let your success be your noise.”</p>
                    <div className='blockquote-footer'>
                        Frank Ocean{' '}
                        <cite title='Source Title'>American singer-songwriter</cite>
                    </div>
                </blockquote>
            </div>
        </div>
    );
};

export default Footer;
