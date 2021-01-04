import React from 'react';
import { ResponsiveBarCanvas } from '@nivo/bar';

const BarGraph = ({ data }) => {
    return (
        <ResponsiveBarCanvas
            data={data}
            indexBy="name"
            margin={{ top: 30, right: 10, bottom: 140, left: 30 }}
            padding={0.3}
            colors={{ scheme: 'nivo' }}
            colorBy="value"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                // legend: 'technologies',
                // legendPosition: 'middle',
                // legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'use in projects',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            // legends={[
            //     {
            //         dataFrom: 'keys',
            //         anchor: 'bottom-right',
            //         direction: 'column',
            //         justify: false,
            //         translateX: 120,
            //         translateY: 0,
            //         itemsSpacing: 2,
            //         itemWidth: 100,
            //         itemHeight: 20,
            //         itemDirection: 'left-to-right',
            //         itemOpacity: 0.85,
            //         symbolSize: 20,
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemOpacity: 1
            //                 }
            //             }
            //         ]
            //     }
            // ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    )
}

export default BarGraph;