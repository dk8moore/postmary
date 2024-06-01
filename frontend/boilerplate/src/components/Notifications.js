import React, { useEffect, useState } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const ws = new WebSocket(process.env.REACT_APP_WS_URL + '/ws/notifications/');
        ws.onmessage = (e) => {
            const data = JSON.parse(e.data);
            setNotifications((prevNotifications) => [...prevNotifications, data.notification]);
        };
        setSocket(ws);

        return () => {
            ws.close();
        };
    }, []);

    const sendNotification = () => {
        if (socket && message) {
            socket.send(JSON.stringify({ 'notification': message }));
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Notifications</h2>
            <div>
                {notifications.map((note, index) => (
                    <div key={index}>{note}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendNotification}>Send Notification</button>
        </div>
    );
};

export default Notifications;
