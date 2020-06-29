import React from 'react';
import Card from '../Card';
import { PrimaryGrid } from './styles';

const Primary = ({ projects }) => {
    return (
        <PrimaryGrid>
            {projects.map(e => {
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
    )
}

export default Primary