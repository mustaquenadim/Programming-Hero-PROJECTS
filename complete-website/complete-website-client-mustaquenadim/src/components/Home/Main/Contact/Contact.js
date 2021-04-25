import React from 'react';

const Contact = () => {
    return (
        <div className='py-3'>
            <h2 className='text-center py-3'>Contact</h2>
            <div className="d-flex justify-content-center py-5">
                <form className='w-50'>
                    <div className="row">
                        <div className="col">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="first-name" placeholder='First Name' />
                            </div>
                        </div>
                        <div className="col">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="last-name" placeholder='Last Name' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="mb-3">
                                <input type="email" class="form-control" id="email" placeholder='Email Address' />
                            </div>
                        </div>
                        <div className="col">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="phone" placeholder='Phone Number' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3">
                            <input type="text" class="form-control" id="message" placeholder='Your Message' />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;