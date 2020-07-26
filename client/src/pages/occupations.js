import React from 'react';
import styled from '@emotion/styled';
import Nav from '../components/Nav';
import Title from '../components/Title';

import occupations from '../data/occupations';

export const Background = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    height: 100vh;
    margin: 0;
`
export const Card = styled.div`
    margin: 0px 15px 15px 15px;
    padding: 15px;
    border-bottom: 1px solid black;
`
export const CardTitle = styled.div`
    font-weight: 700;
    font-size: 28px;
`
export const CardSubTitle = styled.div`
    font-weight: 500;
    font-size: 26px;
    color: grey;
`
export const DateFormat = styled.div`
    display: flex;
    align-items: baseline;
`

const Occupations = () => {
    return (
        <>
            <Title />
            {occupations.map(e => {
                return (
                    <>
                        <Card>
                            <CardTitle>{e.occupation}</CardTitle>
                            <DateFormat>
                                <CardSubTitle>{e.employer}</CardSubTitle>
                                <div>{e.dateStart}</div>
                                <div>{e.dateEnd}</div>
                            </DateFormat>
                            <div>{e.current}</div>
                            <div>{e.summary}</div>
                        </Card>
                    </>
                )
            })}
        </>
    )
}

export default Occupations;