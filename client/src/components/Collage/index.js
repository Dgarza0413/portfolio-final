import React from 'react'
import { CollageGrid, CollagePrimary, CollageSecondary } from './styles';

const Collage = () => {
    const arr = [0, 1, 2, 3, 4, 5]
    return (
        <CollageGrid>
            <CollagePrimary>
                <img src={`https://picsum.photos/500/400?random=${Math.floor(Math.random() * 100)}`} />
            </CollagePrimary>
            {arr.map(e => {
                return (
                    <>
                        <CollageSecondary>{
                            <img src={`https://picsum.photos/250/200?random=${Math.floor(Math.random() * 100)}`} />
                        }</CollageSecondary>
                    </>
                )
            })}
        </CollageGrid>
    )
}

export default Collage;