import React from 'react'

import projectsData from '../files/projectsData';
import ProjectCards from './ProjectCards';
import { Wrapper } from '../styles/ProjectsStyled.js';

function Projects({ handleClickDetails, darkTheme }) {

    const displayProjects = () => {
        return projectsData.map((project, index) => {

            return (
                <ProjectCards
                    key={index}
                    id={index}
                    title={project.title}
                    screenshots={project.screenshots}
                    description={project.description}
                    skills={project.skills}
                    handleClickDetails={id => handleClickDetails(id)}
                    darkTheme={darkTheme}
                />
            )
        })
    }

    return (
        <Wrapper id="projects" className="project-container">
            {displayProjects()}
        </Wrapper>
    )
}

export default Projects
