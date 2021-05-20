import React from 'react'

import resumePdf from '../files/myresume.pdf';
//@ts-ignore 
import { Wrapper } from '../styles/AboutStyled.tsx';

type Props = {
    darkTheme: boolean
}

function About({ darkTheme }: Props) {
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
                Living in Calgary, I like the mountains, outdoor activities,
                snowboard, hiking or others. Comfortable with JavaScript and
                Python, front and back-end, experimenting with React Native and mobile development.
                Love to learn new languages and fameworks. Available to work remote or in an office.
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