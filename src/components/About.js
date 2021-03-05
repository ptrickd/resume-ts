import React from 'react'
import resumePdf from '../files/myresume.pdf';
import '../styles/about.scss';

function About() {
    return (
        <div id="about-me" className="d-flex flex-column align-items-center flex-wrap ">
            <div className="whitespace"></div>
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
            <div id="buttons" className="text-center">
                <a className="btn btn-primary" href={resumePdf} target="blank" role="button"
                    data-container="body" data-toggle="popover" data-placement="top"
                    data-content="Download the resume.">
                    View Resume &raquo;</a>
                {/* <!-- <a className="btn btn-primary" href="#" role="button" data-container="body"
                    data-toggle="popover" data-placement="top" data-content="See the portfolio.">
                    View Portfolio &raquo;</a> --> */}
            </div>
            <div className="whitespace"></div>
        </div>
    )
}

export default About
