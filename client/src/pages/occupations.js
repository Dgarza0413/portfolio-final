import React from 'react'
import Nav from '../components/Nav'
import Title from '../components/Title';

import occupations from '../data/occupations';

export default function Occupations() {
    return (
        <>
            <Title />
            {occupations.map(e => {
                return (
                    <>
                        <div>{e.occupation}</div>
                        <div>{e.summary}</div>
                    </>
                )
            })}
        </>
    )
}
