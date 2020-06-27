import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { Button } from './styles';
import { jsx, css } from '@emotion/core';

const Card = ({ title, description, image, id }) => {
    return (
        <Link to={`/project/${id}`}>
            <div style={{
                position: 'relative',
            }}
            >
                <div style={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    fontSize: '2rem'
                }}
                >{title}</div>
                <img style={{
                    borderRadius: '25px',
                    width: "100%",
                    height: "100%"
                }}
                    src={image}
                />
            </div>
        </Link>
    )
}

export default Card