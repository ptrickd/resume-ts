import styled from 'styled-components';
import aboutImg from '../images/background/mouse_scroll-wallpaper-1366x768.jpg';
import aboutImgLight from '../images/background/wesley-tingey-.jpg';
import aboutImg2 from '../images/background/william-iven.jpg'
import aboutImg3 from '../images/background/caleb-moreno.jpg'

import { colorAboutDark, colorAboutLight } from '../constants/Colors';

export const Wrapper = styled.div`
    display: block;
    
    text-align: center;
    font-size: 1.4rem;
    color: ${props => props.darkTheme ? colorAboutDark : colorAboutLight};
    background-image: ${props => props.darkTheme ? `url(${aboutImg})` : `url(${aboutImg3})`};
    background-size: cover;
    background-position: 50 % 0 %;
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 40px;
    margin-left: 0%;

`
     // width: 100%;
 // margin-bottom:  40px;

// img.portrait - s{
//     width: 250px;
//     padding: 20px;
//     padding - top: 0px;
//     padding - bottom: 40px;
//     margin - bottom: 20px;
// }