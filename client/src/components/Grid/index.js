import React from 'react'
import { PrimaryGrid, SecondaryGrid } from './styles';

import Card from '../Card';

export default function Grid({ projects }) {
    return (
        <>
            <PrimaryGrid>
                {projects.map((e, i) => {
                    console.log(e)
                    return (
                        <React.Fragment key={e.id}>
                            {e.category === 'primary'
                                ? <Card {...e} />
                                : ""
                            }
                        </React.Fragment>
                    )
                }
                )}
            </PrimaryGrid>
            <SecondaryGrid>
                {projects.map((e, i) => {
                    return (
                        <React.Fragment key={e.id}>
                            {e.category === 'secondary'
                                ? <Card {...e} />
                                : ""
                            }
                        </React.Fragment>
                    )
                }
                )}
            </SecondaryGrid>
        </>
    )
}
