import React from 'react'
import data from '../data/projects.js';
import Title from '../components/Title';
import Grid from '../components/Grid';
import Nav from '../components/Nav';

const Landing = () => {
    console.log(data)
    return (
        <>
            <Nav />
            <Grid projects={data} />
        </>
    )
}

export default Landing
