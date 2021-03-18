import React from 'react';
import {
    ProjectBox,
    Img,
    TopSection,
    MidSection,
    Button,
    ClickableTitle
} from '../styles/ProjectsStyled';
function ProjectCards({ id, title, screenshot, description, handleClickDetails, darkTheme }) {


    return (
        <ProjectBox onClick={() => handleClickDetails(id)} className="px-5 project-box">
            <TopSection className="spacing top-section">
                <h2>{title}</h2>
                <span><Img src={screenshot}
                    className="project-img"
                    alt='screenshot'
                /></span>
            </TopSection>

            <MidSection className="centered spacing">
                <p>{description}</p>
            </MidSection>
            <MidSection className="centered spacing">

                {/* <Button
                    onClick={() => handleClickDetails(id)}
                    darkTheme={darkTheme}
                >See More</Button> */}
            </MidSection>

        </ProjectBox>
    )
}

export default ProjectCards
