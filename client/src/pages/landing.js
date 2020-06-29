import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function landing() {
    return (
        <div>
            David Garza
            <p>A like to build things check out my work
            <Link to={'/projects'}>
                    Projects
            </Link>
            </p>
        </div>
    )
}
