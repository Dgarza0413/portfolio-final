import styled from '@emotion/styled';

export const CollageGrid = styled.div`
    margin: 0% auto;
    display: grid;
    grid-gap: 0.5rem;
    border-radius: 25px;
    grid-template-columns: auto 20% 20% 20%;
    grid-template-rows: 200px 200px;
`

export const CollagePrimary = styled.div`
    display: grid;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: span 2;
    background-color: skyblue
`

export const CollageSecondary = styled.div`
    grid-template-columns: 1fr 1fr; 
    grid-gap: 1rem;
`