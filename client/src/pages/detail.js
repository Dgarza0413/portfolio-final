import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import data from '../data/projects';

import Collage from '../components/Collage';
import Title from '../components/Title';
import Chip from '../components/Chip';

const Detail = (props) => {
    const matchId = props.match.params.id
    const findId = data.find(e => e.id === parseInt(matchId))

    const callGithub = () => {
        axios.get('https://api.github.com/users/dgarza0413/repos/enguage')
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        callGithub()
    }, [])
    return (
        <>
            <Title />
            <div>{findId.title}</div>
            <p>
                <Link to={'/projects'}>go back</Link>
            </p>
            <Collage image={findId.image} />
            <p>
                {findId.description}
            </p>
            {findId.technologies.map(e => {
                return <Chip text={e} />
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