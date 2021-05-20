import styled from 'styled-components';
import backgroundImg from '../images/background/mike-yukhtenko-hvbIl1XfMlM-unsplash.jpg';

export const Wrapper = styled.div< { backgroundImg: string } >`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0;
    margin: 0 5%;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: 0% 40%;
    padding-bottom: 20px;
    margin-bottom: 20px;
    
    h1 {
        margin: 20px 0;
        color: #DADADA;
    }
   
    h2 {
        margin: 0;
        color: #DADADA;
    }

    li {
     color: #DADADA;
    }
     
    ul {
        margin:0;
        padding:0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media only screen and (max-width: 700px) {
        // background-size: contain;
        background-position: 0% 80%;
    }
`

export const SkillBoxSection = styled.div`

    width: 100%;
    display: flex;
    
    align-items: space-between;
    justify-content: space-between;
    
    

    // border: 1px solid white;
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .box2 {
            margin-bottom: 10px;
        }
    }

    `

export const SkillBox = styled.div`
    width: 220px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 0 1 auto;
    text-align: left;
    font-size: 1.4rem;
    margin: 0 4%;
    // border: 1px solid white;


    li {
        margin: 0;
        padding: 0;
        margin-left: 10px;
        margin-bottom: 5px;
        align-self: left;
        list-style: none;
        // border: 1px solid white;
    }
    

    @media only screen and (max-width: 700px) {
        h2 {
            width: 100%;
            display: flex;
            justify-content: center;
            
        }
        ul {
            width: 100%;
            margin: 0;
            align-items: center;
            // border: 1px solid white;

        }
        
        li {
            margin-left: 0;
            align-items: center;
        }
    }
`

