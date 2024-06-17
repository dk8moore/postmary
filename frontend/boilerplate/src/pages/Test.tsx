import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '@page/Login';
import Users from '@page/Users';
import Notifications from '@app/Notifications';
import Checkout from '@page/Checkout';
import Success from '@page/Success';
import Cancel from '@page/Cancel';

import 'src/assets/styles/styles.css';

const Test: React.FC = () => {
    const isAuthenticated = true;

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<Users isAuthenticated={isAuthenticated} />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/cancel" element={<Cancel />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Test;
