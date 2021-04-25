import React from 'react';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Tutors from './Tutors/Tutors';

const Main = () => {
    return (
        <div className='container'>
            <Services></Services>
            <Testimonials></Testimonials>
            <Tutors></Tutors>
            <Contact></Contact>
        </div>
    );
};

export default Main;