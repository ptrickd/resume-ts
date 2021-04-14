import React from 'react'
import { Wrapper, SkillBox, SkillBoxSection } from '../styles/SkillsStyled.js';

function Skills() {
    return (

        <Wrapper id="skills" className="">
            <h1>What I know</h1>
            <SkillBoxSection>
                <SkillBox className="box1">
                    <h2>Language</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </SkillBox>
      
                <SkillBox className="box2">
                    <h2>Framework</h2>
                    <ul>
                        <li>ReactJS</li>
                        <li>NodeJs</li>
                        <li>Flask</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                    </ul>

                </SkillBox>
            </SkillBoxSection>
        </Wrapper>


    )
}

export default Skills
