import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import NoMatch from './NoMatch/NoMatch';
import logo from './assets/My LOGO.png'
import About from './components/About/About';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-light bg-info">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand"><img className='brand-logo' src={logo} alt="Brand Logo"/>   Sports League</Link>
                    <div className="d-flex">
                        <Link to='/home' className="nav-link active text-white">Home</Link>
                        <Link to='/about' className="nav-link active text-white">About</Link>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/home'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/explore/:leagueID'>
                    <LeagueDetails />
                </Route>
                <Route path='*'>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
