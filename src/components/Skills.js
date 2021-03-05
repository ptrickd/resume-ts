import React from 'react'
import '../styles/skills.scss';

function Skills() {
    return (
        <div>
            <div className="container">

                {/* <!-- Example row of columns --> */}
                <div id="skills" className="row pt-4">
                    <div className="col-md-4  skill-box">
                        <h2>Language</h2>
                        <p>
                            HTML/CSS<br />
                                                Javascript<br />
                                                Python<br />
                                                SQL<br />
                        </p>

                    </div>
                    <div className="col-md-4 skill-box">
                    </div>
                    <div className="col-md-4 skill-box">
                        <h2>Framework</h2>
                        <p>
                            ReactJS<br />
                                                Flask<br />
                                                PostgreSQL<br />
                                                NodeJs <br />
                                                MongoDB<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
