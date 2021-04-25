import React, { useEffect, useState } from 'react';
import instructors from './Instructors.json';

const Tutors = () => {
    const [tutor, setTutor] = useState([]);
    useEffect(() => {
        setTutor(instructors);
    }, []);
    return (
        <div className='py-3'>
            <h2 className='text-center py-3'>Instructors</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 py-5'>
                {tutor.map((tutor) => (
                    <div className="col-lg-4">
                        <div className='card h-100 text-center bg-white shadow'>
                            <img className='card-img-top w-100 img-fluid' src={tutor.image} alt={tutor.name}/>
                            <h5 className='text-dark fw-bold text-mod'>{tutor.name}</h5>
                            <p className='text-secondary'>{tutor.subject}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tutors;