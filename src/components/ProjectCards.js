import React from 'react';
import {
    ProjectBox,
    Img,
    TopSection,
    MidSection
} from '../styles/ProjectsStyled';
function ProjectCards({ id, title, screenshots, description, handleClickDetails, darkTheme }) {

    const limitCharacter = (str) => {

        if (str.length > 100) return str.substring(0, 100) + '...'
        return str

    }

    return (
        <ProjectBox
            darkTheme={darkTheme}
            onClick={() => handleClickDetails(id)}
            className=" project-box"
        >
            <TopSection className="top-section">
                <h2>{title}</h2>
                <span><Img src={screenshots[0]}
                    className="project-img"
                    alt='screenshot'
                /></span>
            </TopSection>

            <MidSection className="">
                <p>{limitCharacter(description)}</p>
            </MidSection>


        </ProjectBox>
    )
}

export default ProjectCards
