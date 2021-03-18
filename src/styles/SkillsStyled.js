import styled from 'styled-components';
import backgroundImg from '../images/background/mike-yukhtenko-hvbIl1XfMlM-unsplash.jpg';

export const Wrapper = styled.div`
    width:100%;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: 0% 50%;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 20px;
    margin-bottom: 20px;

    p {
     color: #DADADA;
    }
`
export const SkillBox = styled.div`
    text-align: center;
    font-size: 1.4rem;
`

// .skill-box{
//     text-align: center;
//     font-size: 1.4rem;

// }

// #skills{
//     background-image: url("../images/background/mike-yukhtenko-hvbIl1XfMlM-unsplash.jpg");
//     background-size: cover;
//     background-position: 0% 50%;
//     padding-bottom: 20px;
//     margin-bottom: 20px;
//     // width: 100%;
// }

// #skills p{
//     font-size: 1.25rem;
//     color: #DADADA;
// }

