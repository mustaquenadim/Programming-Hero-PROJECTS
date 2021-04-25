import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then((response) => response.json())
            .then((data) => setLeagues(data.leagues.slice(0, 15)));
    }, []);
    return (
        <div className='custom-bg'>
            <div className='home-banner w-100'>
                <div className='container'>
                    <h1 className='display-3 text-center text-white text-uppercase py-5 font-weight-bold'>Sports League</h1>
                </div>
            </div>
            <div className='container my-3'>
                <div className='row'>
                    {
                        leagues.map((league) => (<League key={league.idLeague} league={league}></League>))
                    }
                </div>
            </div>
            <div className='text-center py-5'>
                <blockquote className="blockquote mb-0">
                    <p className='text-white'>Whenever you find yourself on the side of the majority, it is time to pause and reflect.</p>
                    <footer className="blockquote-footer">Mark Twain <cite title="Source Title">(American writer, humorist, entrepreneur, publisher, and lecturer)</cite></footer>
                </blockquote>
            </div>
        </div>
    );
};

export default Home;
