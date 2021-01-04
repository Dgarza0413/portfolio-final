import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from './styles';

import './styles.css';

const Nav = () => {
    const routes = [
        {
            route: '/',
            name: 'landing'
        },
        {
            route: '/skills',
            name: 'skills'
        },
        {
            route: '/projects',
            name: 'projects'
        },
        // {
        //     route: '/occupations',
        //     name: 'occupations'
        // }
    ]
    return (
        <nav className="nav-bar">
            <div className="nav-title">David Garza</div>
            {routes.map(e => {
                return (
                    <div className="nav-group">
                        <Link to={e.route}>
                            <div className="nav-item">
                                {e.name}
                            </div>
                        </Link>
                    </div>
                )
            })}
        </nav>
    )
}

export default Nav