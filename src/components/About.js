import React from 'react'
import resumePdf from '../files/myresume.pdf';
import { Wrapper } from '../styles/AboutStyled';

function About({ darkTheme }) {
    return (
        <Wrapper
            darkTheme={darkTheme}
            id="about-me"
        // className="d-flex flex-column align-items-center flex-wrap "
        >
            {/* <div className="whitespace"></div> */}
            {/* <!-- <img src="/image/doc_brown.jpg"
                className="portrait-s img-fluid rounded float-right sticky-top" /> --> */}
            <h3>More about me</h3>
            {/* <!-- <h5>Full Stack Developer</h5> --> */}
            <p>
                &nbsp;
                Living Calgary, likes the mountains and outdoor activities,
                snowboard, hiking or others. Comfortable with javascript and
                python, front and back-end. I'd like to push the barrier of
                my knowledge like mobile development, including react native
                and java. Ready to work remote or in an office.
            </p>
            <div id="buttons" className="">
                <a className="" href={resumePdf} target="blank"
                    data-content="Download the resume.">
                    View Resume &raquo;</a>
            </div>
            {/* <div className="whitespace"></div> */}
        </Wrapper>
    )
}

export default About


// role = "button"
// data - container="body" data - toggle="popover" data - placement="top"