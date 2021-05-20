import styled from 'styled-components';
import { fontColorDark, contactFormBgDark, contactFormBgLight, btnPrimary } from '../constants/Colors';

export const Wrapper = styled.div< { darkTheme: boolean } >`

    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    form {
        width: 80%;
        margin-bottom: 5%;
    }

    #btn-send{
        width: 20%;
        heigth: 100%;
        background-color: ${props => props.darkTheme ? '#164682' : '#ACAAB3'};
        color: ${props => props.darkTheme ? 'white' : 'black'};
        border-color: ${props => props.darkTheme ? btnPrimary : 'black'};
        margin-top: 5px;
        font-size: 1.4rem;
        border-radius: 5%;
        // padding: auto 20px;

        &:hover{
            background-color: ${props => props.darkTheme ? '#2d6ab5;' : '#9a999e'};
            cursor: pointer;
        }
    }

    #btn-reset{
        background-color: ${props => props.darkTheme ? '#C82333' : '#D5CAD6'};
        color: ${props => props.darkTheme ? 'white' : 'black'};
        border-color: ${props => props.darkTheme ? '#C82333' : 'black'};
    }
    
    .form-control {
        width: 100%;
        max-width: 600px;
        flex: display;
        flex-direction: column;
        margin: 3% auto;
        
    }
    .btn-send-section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px auto;
    }

`

export const Input = styled.input< { darkTheme: boolean } >`
    width: 100%;
    background-color: ${props => props.darkTheme ? contactFormBgDark : contactFormBgLight};
    color: ${props => props.darkTheme ? fontColorDark : 'rgba(0,0,0,0.75)'};
    border-color:${props => props.darkTheme ? '' : 'black'};
    font-size: 1.4rem;
    // border-radius: 5%;
    // box-shadow:
`
export const TextArea = styled.textarea< { darkTheme: boolean } >`
    background-color: ${props => props.darkTheme ? contactFormBgDark : contactFormBgLight};
    color: ${props => props.darkTheme ? fontColorDark : 'rgba(0,0,0,0.75)'};
    border-color:${props => props.darkTheme ? '' : 'black'};
    width: 100%;
    font-size: 1.4rem;
    // border-radius: 3%;
`

export const Label = styled.label`
    margin-top:1.5rem;
    margin-bottom: 0;
    font-size: 1.4rem;
`

