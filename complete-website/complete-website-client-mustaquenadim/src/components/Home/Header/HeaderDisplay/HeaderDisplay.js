import React from 'react';
import HeaderDisplayImg from '../../../../assets/HeaderDisplay img.jpg'

const HeaderDisplay = () => {
    return (
        <div className='container pb-5'>
            <div className='row d-flex align-items-center'>
                <div className="col-lg-6">
                    <h1>iLearn</h1>
                    <hr className='w-50 m-0' />
                    <h4>Learn from Home</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi veritatis aliquam aliquid unde, maiores quae! Nemo vel iusto itaque expedita explicabo maxime quisquam officiis?</p>
                    <button className='btn btn-success'>Start Learning Now</button>
                </div>
                <div className="col-lg-6">
                    <img className='w-100' src={HeaderDisplayImg} alt="HeaderMainImg"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderDisplay;