import React, { useState } from 'react';
import api from './api';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await api.post('core/api/token/', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.access_token);
            alert('Login successful!');
        } catch (error) {
            console.error(error);
            alert('Login failed!');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;