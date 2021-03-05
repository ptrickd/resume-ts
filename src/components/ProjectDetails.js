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
    ButtonSectionStyled
} from '../styles/ProjectDetails';
import projectsData from '../files/projectsData';


function ProjectDetails({ id, handleClickNav }) {

    const { title, screenshot, description, skills } = projectsData[id];
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
                    <ListStyled>{displayList()}</ListStyled>
                </SkillsSectionStyled>
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
