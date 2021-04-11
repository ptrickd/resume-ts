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
            className="px-5 project-box"
        >
            <TopSection className="spacing top-section">
                <h2>{title}</h2>
                <span><Img src={screenshots[0]}
                    className="project-img"
                    alt='screenshot'
                /></span>
            </TopSection>

            <MidSection className="centered spacing">
                <p>{limitCharacter(description)}</p>
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
