import React, { Suspense } from 'react'
import { SecondaryGrid } from './styles.js'

const Card = React.lazy(() => import('../Card'))
const Secondary = ({ projects }) => {
    return (
        <SecondaryGrid>
            {projects.map((e) => {
                return (
                    <React.Fragment key={e.id}>
                        {e.category === 'secondary'
                            ? <Suspense fallback={<div style={{ height: '300px', width: '300px' }}></div>}>
                                <Card {...e} size="secondary" />
                            </Suspense>
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