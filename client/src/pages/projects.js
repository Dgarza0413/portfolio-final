import React from 'react'
import data from '../data/projects.js';
import Grid from '../components/Grid';
import Nav from '../components/Nav';

const Landing = () => {
    return (
        <>
            <Nav />
            <Grid projects={data} />
        </>
    )
}

export default Landing
