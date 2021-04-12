import styled from 'styled-components';
import { navBgDark, navBgLight } from '../constants/Colors';

export const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    margin-bottom: 20px;
    display: flex;

    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const ProjectBox = styled.div`
    height: 400px;
    overflow: hidden;
    max-width: 300px;
    text-align: center;
    font-size: 1.4rem;
    margin: 3% 2%;
    padding: 3% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;
    box-shadow: 5% 10%;
    border-radius: 5%;
    background-color: ${props => props.darkTheme ? '#113869' : '#acaab3'};
    box-shadow: 1px 2px;

    &:hover{
        // border:1px solid black;
        cursor: pointer;
        
        
        // transform: scale(1.05);
//          color: #ff7a59;
//   border: #ff7a59 solid 1px;
//   background:#fff;
    }
`
export const Img = styled.img`
    width: 85%;
    height: auto;
`
export const TopSection = styled.div`
    min-height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    margin: 7% auto;

`
export const MidSection = styled.div`
    display: flex;
    justify-content: center;
    margin: 7% auto;
    
    p {
        margin: auto 15px;
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
