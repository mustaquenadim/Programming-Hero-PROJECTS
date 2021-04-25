import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <PrivateRoute path='/destination/:id'>
                        <Destination />
                    </PrivateRoute>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='*'>
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
