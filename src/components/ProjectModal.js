// import React, { useEffect } from 'react'
import minusIcon from '../images/icon/minus.svg';
import projectsData from '../files/projectsData';
import '../styles/projectModal.scss';

function ProjectModal({ id }) {

    const { title, screenshot, description, skills } = projectsData[id];

    // useEffect(() => {
    //     console.log('title', title)
    // }, [])

    return (
        <div className="modal fade" id={`projectModal${id}`} tabIndex="-1" aria-labelledby="projectModalLabel">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <h2>{title}</h2>
                        <img src={screenshot}
                            className="img-responsive project-img"
                            alt='screenshot'
                        />
                        <p>{description}</p>

                        <ul className="">
                            {skills}
                        </ul>
                    </div>
                    <div className="modal-footer border-top-0">
                        <img src={minusIcon} className="minus-plus" data-dismiss="modal" alt='Close' />

                        {/* <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
