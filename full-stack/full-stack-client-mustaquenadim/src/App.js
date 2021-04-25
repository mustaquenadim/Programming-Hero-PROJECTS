import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import Manage from './components/Admin/Manage';
import Add from './components/Admin/Add';
import Edit from './components/Admin/Edit';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
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
                    <PrivateRoute path='/order'>
                        <Order />
                    </PrivateRoute>
                    {/* <PrivateRoute path='/admin'>
                        <Admin />
                    </PrivateRoute> */}
                    <PrivateRoute path='/admin/manage'>
                        <Manage />
                    </PrivateRoute>
                    <PrivateRoute path='/admin/add'>
                        <Add />
                    </PrivateRoute>
                    <PrivateRoute path='/admin/edit'>
                        <Edit />
                    </PrivateRoute>
                    <PrivateRoute path='/checkout/:_id'>
                        <Checkout />
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