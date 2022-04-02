import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { detail } = useParams();
    const [users, setUsers] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${detail}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>This is detail of Friend: {detail}</h1>
            <h2>{users.name}</h2>
            <h3>{users.username}</h3>
            <h4>{users.email}</h4>
            <h5>{users.address?.city}</h5>
        </div>
    );
};

export default FriendDetail;