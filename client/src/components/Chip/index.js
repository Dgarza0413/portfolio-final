import React from 'react';
import styled from '@emotion/styled';

import utils from '../Utils/';

export const Chips = styled.span`
    border-radius: 25px;
    padding 10px;
    margin: 0px 5px 0px 0px;
    color: ${props => props.secondary};
    background-color: ${props => props.primary};

`

export default function Chip({ text }) {
    return (
        <>
            <Chips
                primary={'#ddd'}
                secondary={"blue"}
            >
                #{text}
            </Chips>
            {utils(text)}
        </>
    )
}
