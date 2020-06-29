import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data/projects';

import Collage from '../components/Collage';

const Detail = (props) => {
    const matchId = props.match.params.id
    const findId = data.find(e => e.id === parseInt(matchId))
    console.log(findId)
    return (
        <>
            <div>{findId.title}</div>
            <Collage />
            {findId.description}
            <Link to={'/'}>go back</Link>
            {findId.technologies.map(e => {
                return (
                    <div>
                        {e}
                    </div>
                )
            })}
        </>
    )
}

export default Detail;