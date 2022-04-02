import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav>
            <h1>Welcome to my Website</h1>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/friends">Friends</CustomLink>
            <CustomLink to="/posts">Posts</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </nav>
    );
};

export default Header;