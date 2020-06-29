import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to={`/`}>
                Projects
            </Link>
            <Link to={`/data`}>
                Data
            </Link>
        </div>
    )
}

export default Nav