import styled from 'styled-components';
import { navBgLight } from '../constants/Colors';

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

        .main{
            grid-area: main
        }
        .side1{
            grid-area: side1
        } 
        .side2{
            grid-area: side2
        }
        
        margin: 3% auto;
        padding: 2% auto;
        display: grid;
        gap: 5px;
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
    width: 100%;
    display:flex;
    justify-content: space-between;
    // flex-direction: column;
    flex-wrap: wrap;
    // list-style-type: circle;

    li{
        padding: auto 5%;
        margin: auto 5%;
    }
`
export const ButtonSectionStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 7% auto;
`

export const ButtonStyled = styled.button`
    font-size: 1.4rem;
    width: auto;
    background-color:  ${props => props.darkTheme ? '#04569e' : navBgLight};
    color: white;
    border-radius: 8%;
    // border-color: #04569e;
    &: hover{
        background-color: ${props => props.darkTheme ? 'white' : 'white'};
        color:${props => props.darkTheme ? 'rgb(123, 162, 241)' : navBgLight};
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
        color: ${props => props.darkTheme ? '#66a6f4' : navBgLight};
    }
    span {
        align-self: center;
    }
`
