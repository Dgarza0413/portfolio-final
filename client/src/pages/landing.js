import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import art from '../data/img/computer-flat.png';


export const Background = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    height: 100vh;
    margin: 0;
`
export const LeftSide = styled.div`
    background-color: skyblue;
    grid-column-start: 1;
    height: 100vh;
`

export const RightSide = styled.div`
    background-color: grey;
    grid-column-start: 2;
    height: 100vh;
`

export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

export default function landing() {
    return (
        <Background>
            <LeftSide />
            <RightSide />
            <Center>
                <h1>David Garza</h1>
                <img style={{ width: '400px' }} src={art} />
                <p>I build sites and looking for new ideas</p>
                <Link to={'/projects'}>Projects</Link>
            </Center>
        </Background>
    )
}
