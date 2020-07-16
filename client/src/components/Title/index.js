import React from 'react'
import styled from '@emotion/styled';

export const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 45vh;
    width: 100%;
    border-radius-right: 20%;
    border-radius-left: 30%;
    background-color: skyblue;
    border-radius: 0 0 20% 40%;
    z-index: -1;
`

const Title = () => {
    return <Header />
}

export default Title