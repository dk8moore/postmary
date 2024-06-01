import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import Notifications from './Notifications';
import Checkout from './payments/Checkout';
import Success from './payments/Success';
import Cancel from './payments/Cancel';

import './styles.css'

const Test = () => {
    const isAuthenticated = true;

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<Users isAuthenticated={isAuthenticated} />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/success" element={<Success/>} />
                    <Route path="/cancel" element={<Cancel/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default Test;