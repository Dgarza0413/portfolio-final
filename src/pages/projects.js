import React from 'react'
import Grid from '../components/Grid';
import Title from '../components/Title';

import data from '../data/projects.js';

const Landing = () => {
    return (
        <>
            <Title />
            <Grid projects={data} />
        </>
    )
}

export default Landing
