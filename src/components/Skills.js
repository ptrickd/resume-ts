import React from 'react'
import { Wrapper, SkillBox } from '../styles/SkillsStyled.js';

function Skills() {
    return (
        <div>
            <div className="container">

                {/* <!-- Example row of columns --> */}
                <Wrapper id="skills" className="row pt-4">
                    <SkillBox className="col-md-4  skill-box">
                        <h2>Language</h2>
                        <p>
                            HTML/CSS<br />
                                                Javascript<br />
                                                Python<br />
                                                SQL<br />
                        </p>

                    </SkillBox>
                    <SkillBox className="col-md-4 skill-box">
                    </SkillBox>
                    <SkillBox className="col-md-4 skill-box">
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
            </div>
        </div>
    )
}

export default Skills
