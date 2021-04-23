import styled from 'styled-components';
import { navBgDark, navBgLight } from '../constants/Colors';

export const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    margin-bottom: 20px;

    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1.4rem;
`
export const CardsSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    flex-wrap: wrap;
`

export const SkillsList = styled.ul`
width: 100%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin-bottom: 10px;
    li{
        width: 80%;
        display: flex;
        justify-content: flex-start;
        // align-content: flex-start;
    }

`

export const ProjectBox = styled.div`
    height: 480px;
    overflow: hidden;
    max-width: 300px;
    text-align: center;
    font-size: 1.4rem;
    margin: 3% 2%;
    padding: 3% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-self: flex-start;
    // align-items: flex-start;
    box-shadow: 5% 10%;
    border-radius: 5%;
    background-color: ${props => props.darkTheme ? '#113869' : '#acaab3'};
    box-shadow: 1px 2px;

    &:hover{

        cursor: pointer;

    }
`
export const Img = styled.img`
    width: 85%;
    height: auto;
    margin: 0 0;
    padding: 0 0;
    align-self: flex-end;
`
export const TopSection = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-evenly;
    flex: 1 0 flex;
    margin: auto auto;
    margin-top: 30px;
    h2{
        margin: 0 auto;
    }
    

`
export const MidSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    margin: 5% auto;
    
    p {
        margin: auto 5px;
    }
`
export const Button = styled.button`
     width: auto;
     background-color:  ${props => props.darkTheme ? navBgDark : navBgLight};;
     color: white;
     border-radius: 50%;
     border-color: ${navBgDark};
     &:hover{
        box-shadow: 2px 2px;
     }

`

export const ClickableTitle = styled.span`
    cursor: pointer;
    &:hover{
        color:#04569e;
    }
`
