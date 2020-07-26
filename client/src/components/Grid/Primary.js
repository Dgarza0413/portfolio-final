import React, { Suspense } from 'react';
import { PrimaryGrid } from './styles';
const CardLazy = React.lazy(() => import('../Card'))
const Primary = ({ projects }) => {
    return (
        <PrimaryGrid>
            {projects.map(e => {
                return (
                    <React.Fragment key={e.id}>
                        {e.category === 'primary'
                            ? <Suspense fallback={<img src="https://via.placeholder.com/900" />}>
                                <CardLazy {...e} />
                            </Suspense>
                            : ""
                        }
                    </React.Fragment>
                )
            }
            )}
        </PrimaryGrid>
    )
}

export default Primary
