import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Players.css';

const Players = (props) => {
    const { name, position, age, country, club, image, value } = props.players;
    return (
        <div className="players">
            <div className='card custom-card'>
                <img src={image} className='card-img-top img' alt={name} />
                <div className='card-body'>
                    <h4 className='card-title text-center'>{name}</h4>
                    <h5 className='card-text text-center custom-text'>{position}</h5>
                    <p className='card-text'><b>Age:</b> {age}</p>
                    <p className='card-text'><b>Country:</b> {country}</p>
                    <p className='card-text'><b>Club:</b> {club}</p>
                    <h6 className='card-text text-danger'><strong>Value: €{value}M</strong></h6>
                    <div className='text-center'>
                        <button
                            onClick={() => props.addToCart(props.players)}
                            className='btn btn-primary'
                        >
                            <FontAwesomeIcon icon={faPlus}/>  Select for Shortlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;
