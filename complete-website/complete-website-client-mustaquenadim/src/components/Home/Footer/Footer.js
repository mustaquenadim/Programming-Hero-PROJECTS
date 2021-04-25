import React from 'react';

const Footer = () => {
    return (
        <div className='bg-light'>
            <div className='container'>
            <div className="row py-5">
                <div className="col-lg-4">
                    <p><b>B#3789 (2nd Floor), Road #23, <br/>New DOHS, Mohakhali, Dhaka, Bangladesh</b></p>
                </div>
                <div className="col-lg-2">
                    <h5>Company</h5>
                    <a href="#" className="text-decoration-none">About</a><br/>
                    <a href="#" className="text-decoration-none">Project</a><br/>
                    <a href="#" className="text-decoration-none">Our Team</a><br/>
                    <a href="#" className="text-decoration-none">Terms Conditions</a><br/>
                    <a href="#" className="text-decoration-none">Submit Listing</a>
                </div>
                <div className="col-lg-2">
                    <h5>Quick Links</h5>
                    <a href="#" className="text-decoration-none">Quick Links</a><br/>
                    <a href="#" className="text-decoration-none">Rentals</a><br/>
                    <a href="#" className="text-decoration-none">Sales</a><br/>
                    <a href="#" className="text-decoration-none">Contact</a><br/>
                    <a href="#" className="text-decoration-none">Our blog</a>
                </div>
                <div className="col-lg-4">
                    <h5>About Us</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto, in expedita aperiam libero similique commodi, nostrum asperiores, facere sequi sapiente eum. Perspiciatis, modi corrupti.</p>

                </div>
            </div>
            <p className='text-center'>This website is made with love by Mustaque Nadim.</p>
        </div>
        </div>
    );
};

export default Footer;