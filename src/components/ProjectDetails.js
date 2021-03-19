import React from 'react';
import {
    ContainerStyled,
    TitleStyled,
    ImgSectionStyled,
    ImgStyled,
    DescSectionStyled,
    PStyled,
    SkillsSectionStyled,
    ListStyled,
    ButtonStyled,
    ButtonSectionStyled,
    LinksSectionStyled
} from '../styles/ProjectDetails';
import projectsData from '../files/projectsData';


function ProjectDetails({ id, handleClickNav, darkTheme }) {

    const {
        title,
        screenshot,
        description,
        skills,
        repo,
        website,
        haveRepo,
        haveWebsite
    } = projectsData[id];
    const displayList = () => {
        return skills.map((skill, index) => {
            return (
                <li key={index}>{skill}</li>
            )
        })
    }

    return (
        <>
            <ContainerStyled>
                <TitleStyled>{title}</TitleStyled>
                <ImgSectionStyled>
                    <ImgStyled src={screenshot} className='main' />
                    <ImgStyled src={screenshot} className='side1' />
                    <ImgStyled src={screenshot} className='side2' />
                </ImgSectionStyled>
                <DescSectionStyled>
                    <PStyled>{description}</PStyled>
                </DescSectionStyled>
                <SkillsSectionStyled>
                    <h4>Some of the technology used!</h4>
                    <ListStyled>{displayList()}</ListStyled>
                </SkillsSectionStyled>
                <LinksSectionStyled>

                    {
                        haveWebsite ? <span><a
                            href={`${website}`}
                        >Website</a></span>
                            : <span>Not yet available</span>
                    }
                    {
                        haveRepo ? <span><a
                            href={`${repo}`}
                        >Github Repo</a></span>
                            : <span>Not yet available</span>
                    }

                </LinksSectionStyled>
                <ButtonSectionStyled>
                    <ButtonStyled
                        onClick={() => handleClickNav()}
                        darkTheme={darkTheme}
                    >
                        Go Back
                    </ButtonStyled>
                </ButtonSectionStyled>

            </ContainerStyled>
        </>
    )
}

export default ProjectDetails
