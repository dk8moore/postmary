import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('/core/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: email, password: password }),
        });

        if (response.ok) {
            // Redirect to the home page or another page
            window.location.href = '/';
        } else {
            const data = await response.json();
            setError(data.error || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="links">
                <a href="/password-reset">Forgot password?</a>
                <a href="/signup">Sign up</a>
            </div>
            <div className="social-auth">
                <a href="/auth/login/google-oauth2/" className="google">Login with Google</a>
                <a href="/auth/login/facebook/" className="facebook">Login with Facebook</a>
            </div>
        </div>
    );
};

export default Login;