import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '@/src/pages/Login';
import Users from './Users';
import Notifications from 'src/components/notifications/Notifications';
import Checkout from '@/src/pages/Checkout';
import Success from '@/src/pages/Success';
import Cancel from '@/src/pages/Cancel';

import './styles.css';

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
