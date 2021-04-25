import React, { useEffect, useState } from 'react';
import vehicles from '../../Data/Data.json';
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {
    const [ride, setRide] = useState([]);
    useEffect(() => {
        setRide(vehicles);
    }, []);
    return (
        <div className='custom-bg py-5'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {ride.map((vehicle) => (
                        <Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
