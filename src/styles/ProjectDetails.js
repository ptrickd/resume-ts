import styled from 'styled-components';

export const ContainerStyled = styled.div`
fon
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto 5%;
    `

export const TitleStyled = styled.div`
        font-size: 2.5rem;
        display: flex;
        justify-content: center;
        margin: 3% auto;
    `

export const ImgSectionStyled = styled.div`
        display: flex;
        justify-content: center;
         margin: 3% auto;
    `

export const ImgStyled = styled.img`
        width: 85%;
    `

export const DescSectionStyled = styled.div`
    padding: auto 30%;
    margin: 3% auto;
`

export const PStyled = styled.p`
margin: auto 10%;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    
`

export const SkillsSectionStyled = styled.div`
    font-size: 1.6rem; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 3% auto;
    justify-content: space-evenly;

    h4, ul {
        align-self: center;
    }
`
export const ListStyled = styled.ul`
      
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
`
export const ButtonSectionStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 7% auto;
`

export const ButtonStyled = styled.button`
    font-size: 1.4rem;
    width: auto;
    background-color:  #04569e;
    color: white;
    border-radius: 5%;
    border-color: #04569e;
    &: hover{
        background-color: rgb(123, 162, 241);
        color:#04569e;
        box-shadow: 2px 4px;
    }
`

export const LinksSectionStyled = styled.div`
    font-size: 1.6rem;
    widht: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    a {
        color: #66a6f4;
    }
    span {
        align-self: center;
    }
`