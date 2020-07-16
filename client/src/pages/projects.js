import React from 'react'
import Grid from '../components/Grid';
import Nav from '../components/Nav';
import Title from '../components/Title';
import Dropdown from '../components/Dropdown';
import Search from '../components/Search';

import data from '../data/projects.js';

const Landing = () => {
    return (
        <>
            <Title />
            <Nav />
            <Grid projects={data} />
        </>
    )
}

export default Landing
