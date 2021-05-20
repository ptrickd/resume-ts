import styled from 'styled-components';
import aboutImg from '../images/background/mouse_scroll-wallpaper-1366x768.jpg';
// import aboutImgLight from '../images/background/wesley-tingey-.jpg';
// import aboutImg2 from '../images/background/william-iven.jpg'
import aboutImg3 from '../images/background/caleb-moreno.jpg'

import { colorAboutDark, colorAboutLight } from '../constants/Colors';

export const Wrapper = styled.div < { darkTheme: boolean } > `
    
    width: 100%;
    margin: 0 0;
    padding: auto 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 1.4rem;
    color: ${props => props.darkTheme ? colorAboutDark : colorAboutLight};
   
    background: ${props => props.darkTheme ?
        'linear-gradient(90deg, rgba(20,93,160,1) 10%, rgba(12,45,72,1) 90%);'
        :
        'linear-gradient(90deg, rgba(238,237,231,1) 0%, rgba(134,139,142,1) 35%, rgba(185,183,189,1) 66%, rgba(231,210,204,1) 100%);'
    }
    
    // background-image: ${props => props.darkTheme ? `url(${aboutImg})` : `url(${aboutImg3})`};
    background-size: cover;
    background-position: 50 % 0 %;

    p {
        padding: 0 20px;  
    }

    a {
        width: 100%;
        text-decoration: none;
        color: #eee;    
    }

    #buttons {

        margin: 3% auto;
        padding: 10px 20px;
        // border: 1px solid blue;
        border-radius: 6%;
        background-color: ${props => props.darkTheme ? '#164682' : '#868b8e;'}
        width: 140px;
        align-self: center;
        box-shadow: 1px 2px #868b8e;
        cursor: pointer;
        &:hover {
            background-color: ${props => props.darkTheme ? '#175096' : '#6e7375;'}
        }
        
    }

`
