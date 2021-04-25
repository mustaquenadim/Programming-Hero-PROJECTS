import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import vehicles from '../../Data/Data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import Map from '../Map/Map';

const Destination = () => {
    const [destination, setDestionation] = useState({ from: '', to: '', date: ''});
    const handleBlur = (event) => {
        console.log(event.target.name, event.target.value);
        if (event.target.name === 'from') {
            destination.from = event.target.value;
        }
        if (event.target.name === 'to') {
            destination.to = event.target.value;
        }
        if (event.target.name === 'date') {
            destination.date = event.target.value;
        }
        if (event.target.name === 'time') {
            destination.time = event.target.value;
        }
    };

    const [search, setSearch] = useState(false);
    const searchHandler = (event) => {
        setSearch(!search);
        event.preventDefault();
    };

    const { id } = useParams();
    const [vehicle, setVehicle] = useState({});
    useEffect(() => {
        const info = vehicles.filter((type) => id == type.id);
        setVehicle(info[0]);
    }, [id]);

    return (
        <div className='container py-3'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                <div className='col-lg-4'>
                    <div className='bg-warning p-3 rounded'>
                        <h2>{vehicle.transport} Ride</h2>
                    </div>
                    <br />
                    {!search ? (
                        <div className='bg-success p-3 rounded'>
                            <form onSubmit={searchHandler}>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputEmail1'>Pick From</label>
                                    <input type='text' className='form-control' placeholder='From' name='from' onBlur={handleBlur} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputPassword1'>Pick To</label>
                                    <input type='text' className='form-control' placeholder='To' name='to' onBlur={handleBlur} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputPassword1'>Date</label>
                                    <input type='date' className='form-control' placeholder='To' name='date' onBlur={handleBlur} required/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputPassword1'>Time</label>
                                    <input type='time' className='form-control' placeholder='To' name='time' onBlur={handleBlur} required/>
                                </div>
                                <input type='submit' className='btn btn-primary form-control' value='Search'/>
                            </form>
                        </div>
                    ) : (
                        <div className='bg-success p-3 rounded'>
                            <table className='table table-bordered table-hover bg-white'>
                                <tbody>
                                    <tr>
                                        <th>From</th>
                                        <td>{destination.from}</td>
                                    </tr>
                                    <tr>
                                        <th>To</th>
                                        <td>{destination.to}</td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td>{destination.date}</td>
                                    </tr>
                                    <tr>
                                        <th>Time</th>
                                        <td>{destination.time}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='card text-center p-2'>
                                <div className='row no-gutters d-flex align-items-center justify-content-center'>
                                    <div className='col-lg-3'>
                                        <img className='w-100' src={vehicle.image} alt='...'/>
                                    </div>
                                    <div className='col-lg-3'>
                                        <h5 className='card-title'>{vehicle.transport}</h5>
                                    </div>
                                    <div className='col-lg-3'>
                                        <h5 className='card-title'><FontAwesomeIcon icon={faUserFriends}/>{vehicle.capacity}</h5>
                                    </div>
                                    <div className='col-lg-3'>
                                        <h5 className='card-title'>${vehicle.price}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-lg-8'>
                    {/* <iframe className='google-map' title='Google Map' src='https://maps.google.com/maps?q=1000%20Motijheel,%20Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed'></iframe> */}
                    <Map/>
                </div>
            </div>
        </div>
    );
};

export default Destination;
