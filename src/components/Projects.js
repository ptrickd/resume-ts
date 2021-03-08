import React from 'react'

import projectsData from '../files/projectsData';
import ProjectCards from './ProjectCards';
import { Wrapper } from '../styles/ProjectsStyled.js';

function Projects({ handleClickDetails }) {

    const displayProjects = () => {
        return projectsData.map((project, index) => {

            return (
                <ProjectCards
                    key={index}
                    id={index}
                    title={project.title}
                    screenshot={project.screenshot}
                    description={project.description}
                    skills={project.skills}
                    handleClickDetails={id => handleClickDetails(id)}
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
