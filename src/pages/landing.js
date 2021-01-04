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
    // background-color: grey;
    background-color: #383B53;
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
                <h1 style={{ color: 'white', fontSize: '48px' }}>David Garza</h1>
                <img style={{ width: '400px' }} src={art} />
                <p style={{ color: 'white', fontSize: '30px' }}>I build sites and look for new ideas</p>
                <Link to={'/projects'} style={{ color: 'white' }}>Enter Projects</Link>
            </Center>
        </Background>
    )
}
