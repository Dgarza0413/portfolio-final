import React, { Suspense } from 'react'
import Card from '../Card';
import { SecondaryGrid } from './styles.js'
const CardLazy = React.lazy(() => import('../Card'))

const Secondary = ({ projects }) => {
    return (
        <SecondaryGrid>
            {projects.map((e, i) => {
                return (
                    <React.Fragment key={e.id}>
                        {e.category === 'secondary'
                            ? <Suspense fallback={<img src="https://via.placeholder.com/300" />}>
                                <CardLazy {...e} />
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