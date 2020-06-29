import React, { useState, useEffect } from 'react';
import skills from '../data/skills';
import projects from '../data/projects';
import Nav from '../components/Nav';
import BarGraph from '../components/Graph/Bar';

export default function Skills() {
    const [data, setData] = useState()

    const projectTally = () => {
        let obj = []
        for (let i = 0; i < projects.length; i++) {
            for (let j = 0; j < projects[i].technologies.length; j++) {
                if (!obj[projects[i].technologies[j]]) {
                    obj[projects[i].technologies[j]] = [1]
                } else {
                    obj[projects[i].technologies[j]].push(1)
                }
            }
        }
        let metrics = []
        Object.entries(obj).map(e => {
            let item = {
                name: e[0],
                value: e[1].reduce((acc, cur) => acc + cur)
            }
            metrics.push(item)
        })
        setData(metrics)
    }

    useEffect(() => {
        projectTally()
    }, [])

    return (
        <div>
            <Nav />
            <div style={{ height: '50vh' }}>
                <BarGraph data={data} />
            </div>
            This is skills page
            {skills.map(e => {
                return (
                    <div>{e.skill}</div>
                )
            })}
        </div>
    )
}
