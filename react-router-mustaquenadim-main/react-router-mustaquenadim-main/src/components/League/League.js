import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const League = (props) => {
    const {idLeague, strLeague, strSport} = props.league;
    return (
        <div className="col-lg-4">
            <div className="card text-center custom-card">
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{strLeague}</h5>
                    <p className="card-text font-weight-normal">Sports type: {strSport}</p>
                    <Link to={`/explore/${idLeague}`}>
                        <button className="btn btn-success">Explore <FontAwesomeIcon icon={faChevronRight}/></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default League;