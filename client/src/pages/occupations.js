import React from 'react'
import Nav from '../components/Nav'

import occupations from '../data/occupations';

export default function Occupations() {
    return (
        <div>
            <Nav />
            {occupations.map(e => {
                return (
                    <>
                        <div>{e.occupation}</div>
                        <div>{e.summary}</div>
                    </>
                )
            })}
        </div>
    )
}
