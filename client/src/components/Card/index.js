import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from './styles';

const Card = ({ title, description, image }) => {
    return (
        <div>
            <img style={{ borderRadius: '25px', width: "100%" }} src={image} />
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default Card