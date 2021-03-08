import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-bottom: 20px;
    margin-bottom: 20px;
    display: flex;

    width: 100%;
    padding: 5%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

`
export const ProjectBox = styled.div`
    min-height: 100%;
    max-width: 300px;
    text-align: center;
    font-size: 1.4rem;
    margin: 1%;
    // border: solid 1px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;
    // flex-grow: 2;
    // flex-shrink: 1;
    box-shadow: 5% 10%;
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
`
export const Button = styled.button`
     width: auto;
     background-color:  #04569e;
     color: white;
     border-radius: 5%;
     border-color: #04569e;
     &:hover{
         background-color: rgb(123, 162, 241);
         color:#04569e;
         box-shadow: 2px 4px;
     }

`

// .project-box {
//     min-height: 100%;
//     max-width: 300px;
//     text-align: center;
//     font-size: 1.4rem;
//     margin: 1%;
//     // border: solid 1px black;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-self: flex-start;
//     // flex-grow: 2;
//     // flex-shrink: 1;
// // box-shadow: 5% 10%;


// }

// .project-container{
//     width: 100%;
//     padding: 5%;
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;

// }


// img.project-img{
//     width: 85%;
//     height: auto;
//     // display: flex;
//     // justify-content: center;
// }

// .centered{
//     display: flex;
//     justify-content: center;

// }

// .spacing{
//  margin: 7% auto;
// }

// .btn-project{
//     width: auto;
//     background-color:  #04569e;
//     color: white;
//     border-radius: 5%;
//     border-color: #04569e;
//     &:hover{
//         background-color: rgb(123, 162, 241);
//         color:#04569e;
//         box-shadow: 2px 4px;
//     }
// }
// .top-section{
//     min-height: 30%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-content: space-between;

// }
// #projects {
//     padding-bottom: 20px;
//     margin-bottom: 20px;
//     display: flex;
//     // flex-wrap:wrap;
// }