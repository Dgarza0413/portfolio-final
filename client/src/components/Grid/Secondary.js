import React from 'react'
import Card from '../Card';
import { SecondaryGrid } from './styles.js'

const Secondary = ({ projects }) => {
    return (
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
    )
}

export default Secondary