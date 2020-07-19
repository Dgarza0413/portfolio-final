import React from 'react'
import { CollageGrid, CollagePrimary, CollageSecondary } from './styles';

const Collage = ({ image }) => {
    const arr = [0, 1, 2, 3, 4, 5]
    return (
        <CollageGrid>
            <CollagePrimary>
                <img
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '25px'
                    }}
                    src={image} />
            </CollagePrimary>
            {arr.map(e => {
                return (
                    <>
                        <CollageSecondary>{
                            <img
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '25px'
                                }}
                                src={`https://picsum.photos/250/200?random=${Math.floor(Math.random() * 100)}`} />
                        }</CollageSecondary>
                    </>
                )
            })}
        </CollageGrid>
    )
}

export default Collage;