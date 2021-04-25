import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import maleImg from '../../assets/male.png';
import femaleImg from '../../assets/female.png';
import twitterLogo from '../../assets/Twitter.png';
import facebookLogo from '../../assets/Facebook.png';
import youTubeLogo from '../../assets/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faFlag,
    faFutbol,
    faVenusMars,
} from '@fortawesome/free-solid-svg-icons';

const LeagueDetails = () => {
    const { leagueID } = useParams();

    const [league, setLeague] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueID}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setLeague(data.leagues[0]));
    }, [leagueID]);

    const {
        strBanner,
        strLogo,
        strLeague,
        intFormedYear,
        strCountry,
        strSport,
        strGender,
        strDescriptionEN,
        strTwitter,
        strFacebook,
        strYoutube,
    } = league;
    return (
        <>
            <div className='custom-bg'>
                <div className='custom-banner'>
                    <img
                        src={strBanner}
                        alt='League Banner'
                        className='banner'
                    />
                    <div className='overlay'>
                        <img
                            src={strLogo}
                            alt='League Logo'
                            className='m-auto logo'
                        />
                    </div>
                </div>
                <div className='container'>
                    <div className='card my-3 bg-primary'>
                        <div className='row no-gutters p-1'>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h4 className='card-title text-uppercase text-danger font-weight-bold'>
                                        {strLeague}
                                    </h4>
                                    <p className='card-text text-white font-weight-bold'>
                                        <FontAwesomeIcon
                                            icon={faClock}
                                        />{' '}
                                        Founded: {intFormedYear}
                                    </p>
                                    <p className='card-text text-white font-weight-bold'>
                                        <FontAwesomeIcon icon={faFlag} />{' '}
                                        Country: {strCountry}
                                    </p>
                                    <p className='card-text text-white font-weight-bold'>
                                        <FontAwesomeIcon icon={faFutbol} />{' '}
                                        Sport Type: {strSport}
                                    </p>
                                    <p className='card-text text-white font-weight-bold'>
                                        <FontAwesomeIcon icon={faVenusMars} />{' '}
                                        Gender: {strGender}
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 py-2'>
                                {strGender === 'Male' ? (
                                    <img
                                        className='conditional-image'
                                        src={maleImg}
                                        alt='Male'
                                    />
                                ) : (
                                    <img
                                        className='conditional-image'
                                        src={femaleImg}
                                        alt='Female'
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='card-text text-white'>
                            {strDescriptionEN}
                        </p>
                        <div className='text-center pb-3'>
                            <a
                                href={
                                    strTwitter === ''
                                        ? 'https://www.twitter.com'
                                        : `https://${strTwitter}`
                                }
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <img
                                    className='custom-icon'
                                    src={twitterLogo}
                                    alt='Twitter'
                                />
                            </a>
                            <a
                                href={
                                    strFacebook === ''
                                        ? 'https://www.facebook.com'
                                        : `https://${strFacebook}`
                                }
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <img
                                    className='custom-icon'
                                    src={facebookLogo}
                                    alt='Facebook'
                                />
                            </a>
                            <a
                                href={
                                    strYoutube === ''
                                        ? 'https://www.youtube.com'
                                        : `https://${strYoutube}`
                                }
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <img
                                    className='custom-icon'
                                    src={youTubeLogo}
                                    alt='YouTube'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeagueDetails;
