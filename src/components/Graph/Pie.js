import React from 'react';
import { ResponsivePieCanvas } from '@nivo/pie'

const MyResponsivePieCanvas = ({ data, state }) => {

    return (
        <ResponsivePieCanvas
            data={data}
            // margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
            margin={{ top: 0, right: 80, bottom: 40, left: 80 }}
            pixelRatio={2}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'paired' }}
            borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        type: 'language'
                    },
                    id: 'dots'
                }

            ]}
            // legends={[
            //     {
            //         anchor: 'right',
            //         direction: 'column',
            //         translateX: 140,
            //         itemWidth: 60,
            //         itemHeight: 14,
            //         itemsSpacing: 2,
            //         symbolSize: 14,
            //         symbolShape: 'circle'
            //     }
            // ]}
            onClick={function (event) { state(event) }}
        />
    )
}

export default MyResponsivePieCanvas;