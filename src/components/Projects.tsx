import React from 'react'

import projectsData from '../files/projectsData';
//@ts-ignore
import ProjectCards from './ProjectCards.tsx';
//@ts-ignore
import { Wrapper, CardsSection } from '../styles/ProjectsStyled.ts';

interface IProps {
    handleClickDetails: (value: number) => void,
    darkTheme: boolean
}

function Projects({ handleClickDetails, darkTheme }: IProps) {

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
                    handleClickDetails={handleClickDetails}
                    darkTheme={darkTheme}
                />
            )
        })
    }

    return (
        <Wrapper id="projects" className="">
            <h1>My Projects</h1>
            <CardsSection >
                {displayProjects()}
            </CardsSection>
        </Wrapper>
    )
}

export default Projects
