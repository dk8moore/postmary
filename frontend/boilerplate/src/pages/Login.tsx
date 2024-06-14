import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100">
            <h2 className="tw-text-3xl tw-font-bold">Login</h2>
            {error && <div className="tw-text-red-500 tw-mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-sm">
                <div className="tw-mb-4">
                    <label htmlFor="email" className="tw-block tw-text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
                    />
                </div>
                <div className="tw-mb-4">
                    <label htmlFor="password" className="tw-block tw-text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded"
                    />
                </div>
                <button type="submit" className="tw-w-full tw-bg-blue-500 tw-text-white tw-py-2 tw-rounded">
                    Login
                </button>
            </form>
            <div className="tw-mt-4">
                <a href="/password-reset" className="tw-text-blue-500 tw-mr-4">Forgot password?</a>
                <a href="/signup" className="tw-text-blue-500">Sign up</a>
            </div>
            <div className="tw-mt-4">
                <a href="/auth/login/google-oauth2/" className="tw-block tw-bg-red-500 tw-text-white tw-py-2 tw-px-4 tw-mb-2 tw-rounded">Login with Google</a>
                <a href="/auth/login/facebook/" className="tw-block tw-bg-blue-700 tw-text-white tw-py-2 tw-px-4 tw-rounded">Login with Facebook</a>
            </div>
        </div>
    );
};

export default Login;
