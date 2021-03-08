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


function ProjectDetails({ id, handleClickNav }) {

    const { title, screenshot, description, skills, repo, website } = projectsData[id];
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
                    <ImgStyled
                        src={screenshot}
                    />
                </ImgSectionStyled>
                <DescSectionStyled>
                    <PStyled>{description}</PStyled>
                </DescSectionStyled>
                <SkillsSectionStyled>
                    <h4>Some of the technology used!</h4>
                    <ListStyled>{displayList()}</ListStyled>
                </SkillsSectionStyled>
                <LinksSectionStyled>
                    <span><a
                        href={`${website}`}
                    >Website</a></span>
                    <span><a
                        href={`${repo}`}
                    >Github Repo</a></span>

                </LinksSectionStyled>
                <ButtonSectionStyled>
                    <ButtonStyled
                        onClick={() => handleClickNav()}
                    >
                        Go Back
                    </ButtonStyled>
                </ButtonSectionStyled>

            </ContainerStyled>
        </>
    )
}

export default ProjectDetails
