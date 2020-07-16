import React, { Suspense } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const Card = ({ title, image, id }) => {
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
                    fontSize: '2rem',
                    fontWeight: '600',
                    color: 'white'
                }}
                >{title}</div>
                {image !== ""
                    ? <img style={{
                        borderRadius: '25px',
                        width: "100%",
                        height: "100%"
                    }}
                        src={image}
                    />
                    : <img style={{
                        borderRadius: '25px',
                        width: "100%",
                        height: "100%"
                    }}
                        src={'https://via.placeholder.com/900'}
                    />
                }
            </div>
        </Link>
    )
}

export default Card