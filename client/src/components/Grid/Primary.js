import React, { Suspense } from 'react';
import { PrimaryGrid } from './styles';

const Card = React.lazy(() => import('../Card'))
const Primary = ({ projects }) => {
    return (
        <PrimaryGrid>
            {projects.map(e => {
                return (
                    <React.Fragment key={e.id}>
                        {e.category === 'primary'
                            ? <Suspense fallback={<img src="https://via.placeholder.com/900" />}>
                                <Card {...e} />
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
