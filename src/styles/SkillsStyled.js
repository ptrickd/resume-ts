import styled from 'styled-components';
import backgroundImg from '../images/background/mike-yukhtenko-hvbIl1XfMlM-unsplash.jpg';

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 0;
    margin: 0 5%;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: 0% 50%;
    padding-bottom: 20px;
    margin-bottom: 20px;
   
    h2, p {
     color: #DADADA;
    }
    .box1 {
        align-self: center;
        flex: 1 1 auto;
    }

    .box2 {
        align-self: center;
        flex: 1 1 auto;
    }
`
export const SkillBox = styled.div`
    width: 220px;
    // min-heigth: 200px;
    text-align: center;
    font-size: 1.4rem;
    margin: auto 4%;
    // border: 1px solid white;

    h2 {
        padding-top: 4%;
    }

    
`

