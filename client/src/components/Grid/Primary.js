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
                            ? <Suspense fallback={
                                <div style={{ height: '700px', width: '700px' }}>

                                </div>
                            }>
                                <Card {...e} size="primary" />
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
