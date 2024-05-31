import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Users from './users';
import Notifications from './notifications';
import Checkout from './checkout';
import Success from './success';
import Cancel from './cancel';

import './styles.css'

const App = () => {
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

export default App;