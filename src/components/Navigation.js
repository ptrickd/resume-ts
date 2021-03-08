import React from 'react'
import GithubIcon from '../images/icon/github_icon.ico';
import LinkedInIcon from '../images/icon/linkedin.svg';
import GmailIcon from '../images/icon/gmail-icon-bw.png';
import { Wrapper, Icon, Switch } from '../styles/NavigationStyled.js';

function Navigation({ handleClickNav, isDetailPage }) {
    return (
        <>
            <Wrapper id="side-bar" className="sticky-top d-flex flex-column align-items-center">
                <div className="whitespace"></div>
                <div id="side-header" className="d-flex flex-column align-items-center">
                    <h3>Patrick</h3>
                    {/* <!-- <img src="image/doc_brown.jpg" alt="portrait"
                        className="portrait-r img-fluid d-flex flex-wrap" /> --> */}
                    <p className="pr-3">
                        Hi. My name is Patrick and I'm a full-stack developer
                        student at EvolveU in Calgary.
                            </p>
                </div>
                <div id="side-ext-link" className="external-link  d-flex align-items-center flex-wrap">
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/ptrickd" target="blank" role="tooltip"
                                data-container="body" data-toggle="popover" data-placement="top"
                                data-content="github:ptrickd">
                                <Icon
                                    alt='Github'
                                    src={GithubIcon}
                                    className="icon mx-0 px-0 img-fluid"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!" role="tooltip" data-container="body"
                                data-toggle="popover" data-placement="top" data-content="Linked In.">
                                <Icon
                                    alt='Linked In'
                                    src={LinkedInIcon}
                                    className="icon mx-0 px-0 img-fluid"
                                />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:patrickdion8@gmail.com" role="tooltip"
                                data-container="body" data-toggle="popover" data-placement="top"
                                data-content="email me">
                                <Icon
                                    alt='Email'
                                    src={GmailIcon}
                                    className="icon mx-0 px-0 img-fluid"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="side-int-link" className="internal-link d-flex align-items-center">
                    <ul>
                        <li>
                            <a
                                onClick={() => handleClickNav()}
                                className="btn btn-secondary btn-block btn-lnk" role="button" href="#about-me">
                                <span>About Me</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleClickNav()}
                                className="btn btn-secondary btn-block btn-lnk" role="button" href="#projects">
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleClickNav()}
                                className="btn btn-secondary btn-block btn-lnk" role="button" href="#skills">
                                <span>Knowledge</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleClickNav()}
                                className="btn btn-secondary btn-block btn-lnk" role="button" href="#comment">
                                <span>Comment</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div id="toggle-switch">
                    <Switch className="switch">

                        <input type='checkbox' />
                        <span className="slider round"></span>
                    </Switch>
                </div> */}
            </Wrapper>
        </>
    )
}

export default Navigation
