import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import axios from 'axios';
import data from '../data/projects';

import Collage from '../components/Collage';
import Title from '../components/Title';
import Chip from '../components/Chip';

export const FlexGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Detail = (props) => {
    const matchId = props.match.params.id
    const findId = data.find(e => e.id === parseInt(matchId))

    console.log(findId)

    const callGithub = () => {
        axios.post('/api/github', findId)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        // axios.get('/api/github')
        //     .then(res => res.data.tree.forEach(element => {
        //         if(element.type === 'tree'){
        //              axios.get('/api/github').then(res => res.data.tree)
        //              console.log('this is a tree repo perform another call')
        //         }
        //         console.log(element)
        //     })
        //     )
        //     .catch(err => console.error(err))
    }

    useEffect(() => {
        callGithub()
    }, [])

    return (
        <>
            <Title />
            <h1>{findId.title}</h1>
            <p>
                <Link to={'/projects'}>go back</Link>
            </p>
            <Collage image={findId.image} imageGallery={findId.imageGallery} />
            <p>
                {findId.description}
            </p>
            <FlexGrid>
                {findId.technologies.map(e => {
                    return <Chip text={e} />
                })}
            </FlexGrid>
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