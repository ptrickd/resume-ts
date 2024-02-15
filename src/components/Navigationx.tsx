import React from 'react'
import GithubIcon from '../images/icon/github_icon.ico';
import LinkedInIcon from '../images/icon/linkedin.svg';
import GmailIcon from '../images/icon/gmail-icon-bw.png';
//@ts-ignore 
import { Wrapper, Icon, Switch } from '../styles/NavigationStyled.tsx';

interface IProps {
    handleClickNav: () => void,
    isDarkTheme: boolean,
    toggleTheme: () => void
}

function Navigation({ handleClickNav, isDarkTheme, toggleTheme }: IProps) {
    return (
        <>
            <Wrapper
                darkTheme={isDarkTheme}
                id="side-bar"
                className="">
                <div className="whitespace"></div>
                <div id="side-header" className="">
                    <h3>Patrick</h3>
                    {/* <!-- <img src="image/doc_brown.jpg" alt="portrait"
                        className="portrait-r img-fluid d-flex flex-wrap" /> --> */}
                    <p className="pr-3">
                        Hi. My name is Patrick and I'm a full-stack developer in Calgary.
                            </p>
                </div>
                <div id="side-ext-link" className="external-link">
                    {/* <ul className="">
                        <li className=""> */}
                    <a className="" href="https://github.com/ptrickd" target="blank" role="tooltip"
                        data-container="body" data-toggle="popover" data-placement="top"
                        data-content="github:ptrickd">
                        <Icon
                            alt='Github'
                            src={GithubIcon}
                            className="icon "
                        />
                    </a>
                    {/* </li>
                        <li className=""> */}
                    <a className="" href="https://www.linkedin.com/in/patrick-dion-335a50207/" target="blank" role="tooltip" data-container="body"
                        data-toggle="popover" data-placement="top" data-content="Linked In.">
                        <Icon
                            alt='Linked In'
                            src={LinkedInIcon}
                            className="icon"
                        />
                    </a>
                    {/* </li>
                        <li className=""> */}
                    <a className="" href="mailto:patrickdion8@gmail.com" role="tooltip"
                        data-container="body" data-toggle="popover" data-placement="top"
                        data-content="email me">
                        <Icon
                            alt='Email'
                            src={GmailIcon}
                            className="icon"
                        />
                    </a>
                    {/* </li>
                    </ul> */}
                </div>
                <div id="side-int-link" className="internal-link">
                    <ul>
                        <li>
                            <a
                                onClick={() => handleClickNav()}
                                className="btn-lnk" role="button" href="#about-me">
                                <span>About Me</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleClickNav()}
                                className="btn-lnk" role="button" href="#projects">
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleClickNav()}
                                className="btn-lnk" role="button" href="#skills">
                                <span>Knowledge</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleClickNav()}
                                className="btn-lnk" role="button" href="#comment">
                                <span>Comment</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div id="toggle-switch">
                    <label className='toggle-label'>{isDarkTheme ? "Light Theme" : "Dark Theme"}</label>
                    <Switch >

                        <input
                            type='checkbox'
                            checked={isDarkTheme}
                            onChange={toggleTheme}
                        />
                        <span className="slider round"></span>
                    </Switch>
                </div> */}
            </Wrapper>
        </>
    )
}

export default Navigation
