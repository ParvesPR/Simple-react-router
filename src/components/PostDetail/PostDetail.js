import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postDetail } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postDetail}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postDetail])
    return (
        <div>
            <h1>This is Post Detail: {postDetail}</h1>
            <h3>{post.title}</h3>
        </div>
    );
};

export default PostDetail;