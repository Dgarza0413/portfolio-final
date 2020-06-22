import React from 'react'
import { PrimaryGrid, SecondaryGrid } from './styles';

export default function Grid({ projects }) {
    return (
        <>
            <PrimaryGrid>
                {projects.map((e, i) => {
                    return (
                        <>
                            {e.category === 'primary'
                                ? <div>
                                    <img style={{ borderRadius: '25px', width: "100%" }} src={e.image} />
                                    <div>{e.title}</div>
                                    <div>{e.description}</div>
                                </div>
                                : ""
                            }

                        </>
                    )
                }
                )}
            </PrimaryGrid>
            <SecondaryGrid>
                {projects.map((e, i) => {
                    return (
                        <>
                            {e.category === 'secondary'
                                ? <div>
                                    <img style={{ borderRadius: '25px', width: "100%" }} src={e.image} />
                                    <div>{e.title}</div>
                                    <div>{e.description}</div>
                                </div>
                                : ""
                            }

                        </>
                    )
                }
                )}
            </SecondaryGrid>
                }
        </>
    )
}
