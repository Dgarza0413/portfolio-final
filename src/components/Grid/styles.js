import styled from '@emotion/styled';

export const PrimaryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 1rem;
`

export const SecondaryGrid = styled.div`
    display: grid;
    @media (max-width:501px){
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 500px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    grid-gap: 1rem;
    margin-top: 1rem;
`