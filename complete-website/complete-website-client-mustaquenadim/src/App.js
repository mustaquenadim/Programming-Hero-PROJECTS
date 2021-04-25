import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import OrderList from './components/Admin/OrderList/OrderList';
import NoMatch from './components/NoMatch/NoMatch';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import Purchase from './components/Purchase/Purchase/Purchase';
import PurchasedServiceList from './components/Purchase/PurchasedServiceList/PurchasedServiceList';
import Review from './components/Purchase/Review/Review';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <PrivateRoute path='/admin/orderList'>
                        <OrderList />
                    </PrivateRoute>
                    <PrivateRoute path='/admin/addService'>
                        <AddService />
                    </PrivateRoute>
                    <PrivateRoute path='/admin/makeAdmin'>
                        <MakeAdmin />
                    </PrivateRoute>
                    <PrivateRoute path='/admin/manageServices'>
                        <ManageServices />
                    </PrivateRoute>
                    <PrivateRoute path='/purchase/purchase/:_id'>
                        <Purchase />
                    </PrivateRoute>
                    <PrivateRoute path='/purchase/purchasedServiceList'>
                        <PurchasedServiceList />
                    </PrivateRoute>
                    <PrivateRoute path='/purchase/review'>
                        <Review />
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
