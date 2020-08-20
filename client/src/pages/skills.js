import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import skills from '../data/skills';
import projects from '../data/projects';

import BarGraph from '../components/Graph/Bar';
import PieGraph from '../components/Graph/Pie';
import Title from '../components/Title';

import Chip from '../components/Chip';

export const GraphStyle = styled.div`
    height: 50vh;
    border-radius: 2%;
    background-color: #fff;
`

export default function Skills() {
    const [data, setData] = useState();
    const [pieData, setPieData] = useState();
    const [items, setItems] = useState([])
    const [state, setState] = useState({})

    const projectTally = () => {
        let obj = []
        let obj2 = []
        let metrics = []
        let metrics2 = []
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
                id: e[0],
                label: e[0],
                value: e[1].reduce((acc, cur) => acc + cur)
            }
            metrics.push(item)
        })


        for (let i = 0; i < skills.length; i++) {
            if (!obj2[skills[i].type]) {
                obj2[skills[i].type] = [1]
            } else {
                obj2[skills[i].type].push(1)
            }
        }

        Object.entries(obj2).map(e => {
            let item = {
                id: e[0],
                label: e[0],
                value: e[1].reduce((acc, cur) => acc + cur)
            }
            metrics2.push(item)
        })

        setData(metrics.sort((b, a) => {
            return a.value - b.value;
        }))

        setPieData(metrics2)
    }

    const renderItems = () => {
        setItems(skills.filter(e => e.type === state.id))
    }

    const handleReset = () => {
        setItems(skills)
    }

    useEffect(() => {
        projectTally()
        handleReset()
    }, [])

    useEffect(() => {
        renderItems()
    }, [state])

    return (
        <>
            <Title />
            <h1>What have I used in the past and how often?</h1>
            <p>every project requires tools to complete, here is a graph of what I use more often</p>
            <GraphStyle>
                <BarGraph data={data} />
            </GraphStyle>
            <h1>Diversity of Technologies</h1>
            <p>How you can break up the types of techologies I have experienced</p>
            <GraphStyle>
                <PieGraph
                    data={pieData}
                    state={setState}
                />
            </GraphStyle>
            <button onClick={handleReset}>reset</button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {items.length > 0
                    ? items.map(e => {
                        if (e.type) {
                            return <Chip text={e.skill} />
                        } else {
                            return
                        }
                    })
                    : ""
                }
            </div>
        </>
    )
}
