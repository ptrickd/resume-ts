import React from 'react';

import {
    ProjectBox,
    Img,
    TopSection,
    MidSection,
    SkillsList
    //@ts-ignore 
} from '../styles/ProjectsStyled.ts';

interface IProps {
    id: string,
    title: string,
    screenshots: string,
    description: string,
    handleClickDetails: (id: string) => void,
    darkTheme: boolean,
    skills: string[]
}

function ProjectCards({ id, title, screenshots, description, handleClickDetails, darkTheme, skills }: IProps) {

    const limitCharacter = (str: string) => {

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
                <span><h2>{title}</h2></span>
                <span><Img src={screenshots[0]}
                    className="project-img"
                    alt='screenshot'
                /></span>
            </TopSection>

            <MidSection className="">
                <p>{limitCharacter(description)}</p>
            </MidSection>
            <SkillsList>
                <li>{skills[0]}</li>
                <li>{skills[1]}</li>
                <li>{skills[2]}</li>
            </SkillsList>




        </ProjectBox>
    )
}

export default ProjectCards
