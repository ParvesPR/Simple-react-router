import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, username, id } = friend;
    const navigate = useNavigate();

    const showFriendDetails = () => {
        // const path = `/friends/${id}`
        navigate('/friend/' + id)
    };
    return (
        <div>

            <h2>{name}</h2>
            <Link to={'/friend/' + id}>Show Detail</Link>
            <button onClick={showFriendDetails}>{username}</button>
        </div>
    );
};

export default Friend;