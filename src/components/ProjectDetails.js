import React, { useState } from 'react';
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
        screenshots,
        description,
        skills,
        repo,
        website,
        haveRepo,
        haveWebsite
    } = projectsData[id];

    const [images, setImages] = useState(screenshots);

    const displayList = () => {
        return skills.map((skill, index) => {
            return (
                <li key={index}>{skill}</li>
            )
        })
    }

    const handleClickImage = (position) => {
        let newArray = [...images];
        let oldMainImage = newArray[0];
        newArray[0] = newArray[position];
        newArray[position] = oldMainImage;
        setImages(newArray)
    }

    return (
        <>
            <ContainerStyled >
                <TitleStyled>{title}</TitleStyled>
                <ImgSectionStyled>
                    <ImgStyled

                        src={images[0]}
                        className='main'
                    />
                    <ImgStyled
                        onClick={() => handleClickImage(1)}
                        src={images[1]}
                        className='side1'
                    />
                    <ImgStyled
                        onClick={() => handleClickImage(2)}
                        src={images[2]}
                        className='side2'
                    />
                </ImgSectionStyled>
                <DescSectionStyled>
                    <PStyled>{description}</PStyled>
                </DescSectionStyled>
                <SkillsSectionStyled>
                    <h4>Some of the technology used!</h4>
                    <ListStyled>{displayList()}</ListStyled>
                </SkillsSectionStyled>
                <LinksSectionStyled
                    darkTheme={darkTheme}
                >

                    {
                        haveWebsite ? <span><a
                            href={`${website}`}
                        >Website</a></span>
                            : null//<span>Not yet available</span>
                    }
                    {
                        haveRepo ? <span><a
                            href={`${repo}`}
                        >Github Repo</a></span>
                            : null//<span>Not yet available</span>
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
