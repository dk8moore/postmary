import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Users from './users';
import Notifications from './notifications';

const App = () => {
    const isAuthenticated = true;

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<Users isAuthenticated={isAuthenticated} />} />
                    <Route path="/notifications" element={<Notifications />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;