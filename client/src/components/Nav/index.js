import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from './styles';

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
        {
            route: '/occupations',
            name: 'occupations'
        }
    ]
    return (
        <Navbar>
            {routes.map(e => {
                return (
                    <NavItem>
                        <Link to={e.route}>
                            {e.name}
                        </Link>
                    </NavItem>
                )
            })}
        </Navbar>
    )
}

export default Nav