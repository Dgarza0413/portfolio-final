import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import skills from '../data/skills';
import projects from '../data/projects';

import Nav from '../components/Nav';
import BarGraph from '../components/Graph/Bar';
import PieGraph from '../components/Graph/Pie';
import Title from '../components/Title';

export const GraphStyle = styled.div`
    height: 50vh;
    border-radius: 2%;
    background-color: #fff;
`

export default function Skills() {
    const [data, setData] = useState();
    const [pieData, setPieData] = useState();

    const projectTally = () => {
        let obj = []
        let obj2 = []
        let metrics = []
        for (let i = 0; i < projects.length; i++) {
            for (let j = 0; j < projects[i].technologies.length; j++) {
                if (!obj[projects[i].technologies[j]]) {
                    obj[projects[i].technologies[j]] = [1]
                } else {
                    obj[projects[i].technologies[j]].push(1)
                }
            }
        }

        Object.entries(obj).map(e => {
            let item = {
                name: e[0],
                value: e[1].reduce((acc, cur) => acc + cur)
            }
            metrics.push(item)
        })

        for (let i = 0; i < metrics.length; i++) {
            for (let j = 0; j < skills.length; j++) {
                if (skills[j].skill === metrics[i].name) {
                    obj2.push({
                        ...skills[j],
                        ...metrics[i],
                        id: skills[j].type,
                        label: skills[j].type
                    })
                }
            }
        }

        setPieData(obj2)
        setData(metrics.sort((b, a) => {
            return a.value - b.value;
        }))
    }

    useEffect(() => {
        projectTally()
    }, [])

    return (
        <div>
            <Title />
            <Nav />
            <GraphStyle>
                <BarGraph data={data} />
            </GraphStyle>
            <GraphStyle>
                <PieGraph data={pieData} />
            </GraphStyle>
        </div>
    )
}
