import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Card = ({ title, image, id, description, size }) => {
    return (
        <Link to={`/project/${id}`}  >
            <div className="card-container">
                <div className="card-title">{title}</div>
                {image !== ""
                    ? <img className="card-image backdrop" src={image} />
                    : <img className="card-image backdrop" src={'https://via.placeholder.com/500'} />
                }
                <div className={`card-text ${size}`}>{description}</div>
            </div>
        </Link>
    )
}

export default Card