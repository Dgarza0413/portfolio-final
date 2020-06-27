import React from 'react'
import data from '../data/projects.js';
import Title from '../components/Title';
import Grid from '../components/Grid';

const Landing = () => {
    console.log(data)
    return (
        <>
            <Grid projects={data} />
        </>
    )
}

export default Landing
