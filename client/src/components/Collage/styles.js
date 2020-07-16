import styled from '@emotion/styled';

export const CollageGrid = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    border-radius: 25px;
    grid-template-columns: auto 20% 20% 20%;
    grid-template-rows: 225px 225px;
`

export const CollagePrimary = styled.div`
    display: grid;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: span 2;
`

export const CollageSecondary = styled.div`
    grid-template-columns: 1fr 1fr; 
    grid-gap: 1rem;
`