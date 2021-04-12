import styled from 'styled-components';
import { navBgLight } from '../constants/Colors';

export const ContainerStyled = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding: 0;
    `

export const TitleStyled = styled.h2`
        width: 94%;
        font-size: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        align-self: cnter;
        padding: 2% auto;
    `

export const ImgSectionStyled = styled.div`

        .main{
            grid-area: main
        }
        .side1{
            grid-area: side1
        } 
        .side2{
            grid-area: side2
        }
        
        width: 94%;
        padding: 2% 2%;
        display: grid;
        gap: 8px;
        grid-template-areas:
        "main main main side1"
        "main main main side2";
         align-items: center;
    `

export const ImgStyled = styled.img`
        width: 100%;
        height:100%;
        margin: 0%;
        padding:0%;
        object-fit:cover;
       
        border: 1px solid black;
    `

export const DescSectionStyled = styled.div`
    width: 90%;
    padding-left: 5%;
    padding-rigth: 5%;
`

export const PStyled = styled.p`
   
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    
`

export const SkillsSectionStyled = styled.div`
    width: 100%;
    font-size: 1.6rem; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
   
    justify-content: space-evenly;

    h4 {
        align-self: center;
    }
`
export const ListStyled = styled.ul`
    width: 92%;
    display:flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;

    li{
        margin: 1% 4%;
        flex 1 0 25%;
    }
`
export const ButtonSectionStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
`

export const ButtonStyled = styled.button`
    font-size: 1.4rem;
    width: auto;
    background-color:  ${props => props.darkTheme ? '#04569e' : navBgLight};
    color: white;
    border-radius: 8%;
    cursor: pointer;
    &: hover{
        background-color: ${props => props.darkTheme ? 'white' : 'white'};
        color:${props => props.darkTheme ? 'rgb(123, 162, 241)' : navBgLight};
        box-shadow: 2px 4px;
    }
`

export const LinksSectionStyled = styled.div`
    font-size: 1.6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ;
    a {
        
        color: ${props => props.darkTheme ? '#66a6f4' : navBgLight};
    }
    span {
        margin: 1% auto;
        align-self: center;
    }
`
