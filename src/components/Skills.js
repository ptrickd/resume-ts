import React from 'react'
import { Wrapper, SkillBox } from '../styles/SkillsStyled.js';

function Skills() {
    return (

        <Wrapper id="skills" className="">
            <SkillBox className="skill-box box1">
                <h2>Language</h2>
                <p>
                    HTML/CSS<br />
                    Javascript<br />
                    Python<br />
                    SQL<br />
                </p>

            </SkillBox>
            {/* <SkillBox className="skill-box">
            </SkillBox> */}
            <SkillBox className="skill-box box2">
                <h2>Framework</h2>
                <p>
                    ReactJS<br />
                    Flask<br />
                    PostgreSQL<br />
                    NodeJs <br />
                    MongoDB<br />
                </p>
            </SkillBox>
        </Wrapper>


    )
}

export default Skills
