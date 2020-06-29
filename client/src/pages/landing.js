import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Background = styled.div`
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
    
`

export default function landing() {
    return (
        <Background>
            <LeftSide>a</LeftSide>
            <RightSide>a</RightSide>
            {/* David Garza */}
            {/* <p>A like to build things check out my work
            <Link to={'/projects'}>
                    Projects
            </Link>
            </p> */}
        </Background>
    )
}
