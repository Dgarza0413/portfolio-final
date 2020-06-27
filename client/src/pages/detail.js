import React from 'react'
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import data from '../data/projects';

const Detail = (props, { }) => {
    const matchId = props.match.params.id
    const findId = data.find(e => e.id === parseInt(matchId))
    return (
        <>
            {/* <Title /> */}
            {/* {data.find(({id}) => id === matchId)} */}
            {/* {findId} */}
            This is the detail page
            {findId.description}
            <Link to={'/'}>go back</Link>
        </>
    )
}

export default Detail;