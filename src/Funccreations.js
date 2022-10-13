import React from 'react';
import './Style.css';

const Avatar = ({ description, picture }) => {
    return (
        <div className="avatar">
            <p>{description}</p>
            <img src={picture}></img>

        </div>
    );
};

export default Avatar;