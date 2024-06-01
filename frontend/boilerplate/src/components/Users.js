import React, { useEffect, useState } from 'react';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('core/users/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Users</h2>
            <ul className="list-group">
                {users.map((user) => (
                    <li key={user.id} className="list-group-item">{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;