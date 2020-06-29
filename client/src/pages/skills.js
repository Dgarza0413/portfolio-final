import React, { useState, useEffect } from 'react';
import skills from '../data/skills';
import projects from '../data/projects';
import Nav from '../components/Nav';

export default function Skills() {
    const projectTally = () => {
        let arr = []
        let obj = {}
        for (let i = 0; i < projects.length; i++) {
            for (let j = 0; j < projects[i].technologies.length; j++) {
                if (!obj[projects[i].technologies[j]]) {
                    obj[projects[i].technologies[j]] = {
                        count: [1]
                    }
                } else {
                    obj[projects[i].technologies[j]].count.push(1)
                }
            }
        }

        console.log(obj)

        for (const property in obj) {
            let item = obj[property].count.reduce((acc, cur) => acc + cur)
            console.log(item)
        }
    }
    console.log(projectTally())

    return (
        <div>
            <Nav />
            This is skills page
            {skills.map(e => {
                console.log(e)
                return (
                    <div>{e.skill}</div>
                )
            })}
        </div>
    )
}
