import React from 'react';
import { ProjectBox, Img, TopSection, MidSection, Button } from '../styles/ProjectsStyled';
// import plusIcon from '../images/icon/plus.svg'
// import ProjectModal from './ProjectModal';
function ProjectCards({ id, title, screenshot, description, skills, handleClickDetails }) {


    // const displaySkills = () => {
    //     return skills.map((skill, index) => {
    //         return <li key={skill + index}>{skill}</li>
    //     })
    // }

    return (
        <ProjectBox className="px-5 project-box">
            <TopSection className="spacing top-section">
                <span><h2>{title}</h2></span>
                <span><Img src={screenshot}
                    className="project-img"
                    alt='screenshot'
                /></span>
            </TopSection>

            <MidSection className="centered spacing">
                <p>{description}</p>
            </MidSection>
            {/* 
            <div className="centered spacing ">
                <ul >
                    {displaySkills()}
                </ul>

            </div> */}
            <MidSection className="centered spacing">
                {/* <a className="project-lnk" role="button" href="#!" data-toggle="modal"
                    data-target={`#projectModal${id}`}>
                    <img src={plusIcon} className="minus-plus" alt='plus icon' />
                </a> */}
                <Button
                    onClick={() => handleClickDetails(id)}
                    className="btn-project"
                >See More</Button>
            </MidSection>
            {/* <ProjectModal id={id} /> */}
        </ProjectBox>
    )
}

export default ProjectCards
