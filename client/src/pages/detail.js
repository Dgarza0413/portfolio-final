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
            <p>
                <Link to={'/projects'}>go back</Link>
            </p>
            <Collage image={findId.image} />
            {findId.description}
            {findId.technologies.map(e => {
                return (
                    <div>
                        {e}
                    </div>
                )
            })}
            <p>
                <a href={findId.gitLink}>{findId.gitLink}</a>
            </p>
            <p>
                <a href={findId.webLink}>{findId.webLink}</a>
            </p>
        </>
    )
}

export default Detail;