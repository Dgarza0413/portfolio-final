import React from 'react'
import projects from '../data/projects.json';
import Title from '../components/Title';
import Card from '../components/Card';
import Grid from '../components/Grid';

export default function landing() {
    return (
        <>
            <Grid projects={projects} />
        </>
    )
}
