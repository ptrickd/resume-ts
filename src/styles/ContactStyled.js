import styled from 'styled-components';
import { fontColorDark, contactFormBgDark, contactFormBgLight, btnPrimary } from '../constants/Colors';

export const Wrapper = styled.div`
    
#btn-send{
        background-color: ${props => props.darkTheme ? btnPrimary : '#C9F0FF'};
        color: ${props => props.darkTheme ? 'white' : 'black'};
        border-color: ${props => props.darkTheme ? btnPrimary : 'black'};
        margin-top: 5px;
    }

    #btn-reset{
        background-color: ${props => props.darkTheme ? '#C82333' : '#D5CAD6'};
        color: ${props => props.darkTheme ? 'white' : 'black'};
        border-color: ${props => props.darkTheme ? '#C82333' : 'black'};
    }

`

export const Input = styled.input`
    background-color: ${props => props.darkTheme ? contactFormBgDark : contactFormBgLight};
    color: ${fontColorDark};
    border-color:${props => props.darkTheme ? '' : 'black'};
    width: 400px;
`
export const TextArea = styled.textarea`
    background-color: ${props => props.darkTheme ? contactFormBgDark : contactFormBgLight};
    color: ${fontColorDark};
    border-color:${props => props.darkTheme ? '' : 'black'};
    width: 400px;
`

export const Label = styled.label`
    margin-top:1.5rem;
    margin-bottom: 0;
`

// .form{
//     background-color: #4f5f76;
//     color: #DADADA;
//     width: 400px;

// }

// label{
//         margin-top:1.5rem;
//         margin-bottom: 0;
//     }

// label.needed::after{
//     content: '* required';
//     color: #DADADA;

// }
// input.needed, textarea.needed{
//     background-color: red;
// }