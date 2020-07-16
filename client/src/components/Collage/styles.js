import styled from '@emotion/styled';

export const CollageGrid = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, 220px);
    justify-content: center;
`

export const CollagePrimary = styled.div`
    display: grid;
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: span 2;
    height: 450px;
`

export const CollageSecondary = styled.div`
    grid-template-columns: 1fr 1fr; 
    grid-gap: 1rem;
`