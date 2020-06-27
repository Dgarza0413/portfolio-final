import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data/projects';

const Detail = (props, { }) => {
    const matchId = props.match.params.id
    const findId = data.find(e => e.id === parseInt(matchId))
    return (
        <>
            {findId.description}
            <Link to={'/'}>go back</Link>
        </>
    )
}

export default Detail;