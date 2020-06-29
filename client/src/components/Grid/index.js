import React from 'react'
import Primary from './Primary';
import Secondary from './Secondary';

export default function Grid({ projects }) {
    return (
        <>
            <Primary projects={projects} />
            <Secondary projects={projects} />
        </>
    )
}
