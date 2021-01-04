import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import skills from '../data/skills';
import projects from '../data/projects';

import BarGraph from '../components/Graph/Bar';
import PieGraph from '../components/Graph/Pie';
import Title from '../components/Title';

import Chip from '../components/Chip';

import { Wrapper } from '../components/Wrapper/styles';

import './styles.css';

export const GraphStyle = styled.div`
    position: relative;
    height: 50vh;
    padding: 6%;
    border-radius: 25px;
    background-color: #fff;
    box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.1);
    margin-bottom: 1rem;
`

export const PrimaryGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%; 
    grid-gap: 1rem;

    @media (max-width:750px){
        grid-template-columns: 1fr;
    }
`

export const SecondaryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 1rem;
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
    }, [])

    useEffect(() => {
        renderItems()
    }, [state])

    return (
        <>
            <Title />
            <PrimaryGrid>
                <GraphStyle>
                    <h1>Aggregate of Tech</h1>
                    <p style={{ margin: 0 }}>what I use more often</p>
                    <BarGraph data={data} />
                </GraphStyle>
                <GraphStyle>
                    <h1 style={{ margin: 0 }}>Diversity of Tech</h1>
                    <p style={{ margin: 0 }}>what I have experience in</p>
                    <PieGraph
                        data={pieData}
                        state={setState}
                    />
                </GraphStyle>
            </PrimaryGrid>
            <Wrapper>
                <h1>Skills</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {items.length > 0
                        ? items.map(e => {
                            if (e.type) {
                                return <Chip text={e.skill} />
                            } else {
                                return
                            }
                        })
                        : skills.map(e => {
                            if (e.type) {
                                return <Chip text={e.skill} />
                            } else {
                                return
                            }
                        })
                    }
                </div>
                <button className="button-reset" onClick={handleReset}>reset</button>
            </Wrapper>
        </>
    )
}
