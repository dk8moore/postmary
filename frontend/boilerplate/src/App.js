import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Users from './users';
import Notifications from './notifications';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" component={Login} />
                    <Route path="/users" component={Users} />
                    <Route path="/notifications" component={Notifications} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
