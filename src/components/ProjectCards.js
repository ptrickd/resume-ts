import React from 'react'
// import plusIcon from '../images/icon/plus.svg'
// import ProjectModal from './ProjectModal';
function ProjectCards({ id, title, screenshot, description, skills, handleClickDetails }) {


    // const displaySkills = () => {
    //     return skills.map((skill, index) => {
    //         return <li key={skill + index}>{skill}</li>
    //     })
    // }

    return (
        <div className="px-5 project-box">
            <div className="spacing top-section">
                <span><h2>{title}</h2></span>
                <span><img src={screenshot}
                    className="project-img"
                    alt='screenshot'
                /></span>
            </div>

            <div className="centered spacing">
                <p>{description}</p>
            </div>
            {/* 
            <div className="centered spacing ">
                <ul >
                    {displaySkills()}
                </ul>

            </div> */}
            <div className="centered spacing">
                {/* <a className="project-lnk" role="button" href="#!" data-toggle="modal"
                    data-target={`#projectModal${id}`}>
                    <img src={plusIcon} className="minus-plus" alt='plus icon' />
                </a> */}
                <button
                    onClick={() => handleClickDetails(id)}
                    className="btn-project"
                >See More</button>
            </div>
            {/* <ProjectModal id={id} /> */}
        </div>
    )
}

export default ProjectCards
