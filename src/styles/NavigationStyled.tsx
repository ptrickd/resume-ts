import styled from 'styled-components';
import { navBgDark, navBgLight, fontColorDark, fontColorLight, backgroundDark } from '../constants/Colors';

export const Wrapper = styled.div< { darkTheme: boolean } >`
  height: 100vh;
  background-color: ${props => props.darkTheme ? navBgDark : navBgLight};
  text-align: center;
  font-size: 1.2rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  padding: 3% 0%;
  overflow:hidden;

  .internal-link a{
    color: ${props => props.darkTheme ? fontColorDark : fontColorLight};
  }

  .internal-link{
    margin-top: 30px;
  }

  .internal-link li{
    padding: 4px 0px;
    margin: 0px 10px;
  }

  .external-link {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

  
  }

  .internal-link {
    width: 100%;
    display: flex;
    justify-content: center;

    ul {
      width: 100%;
      margin: 0;
      padding: 0;
    }
    li {
      width: 100%;
      padding: 10px 0;
      margin: 0;
      display: flex;
      flex: 1 1 200px;
      justify-content: center;
    }
  }

  .btn-lnk {
    width: 50%;
    border: 1px solid black;
    padding: 5px 10px;
    margin: 0 10px;
    border-radius: 5%;
    background-color: #747b80;
    box-shadow: 1px 2px;
    &:hover {
      background-color: #787a7a;
    }
  }
  a {
    text-decoration: none
  }
  li {
      list-style-type: none;
    }

  #toggle-switch{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .toggle-label {
      padding: 5% 0;
    }
  }
`


export const Portrait = styled.img`
     height: 80px;
     width:  80px;
     border-radius: 50%;
`

export const Icon = styled.img`
     height: 40px;
     width:  40px;
     border-radius: 50%;
`


// /******Toggle Switch******/
export const Switch = styled.label`
//  /* The switch - the box around the slider */
   position: relative;
   display: inline-block;
   width: 60px;
   height: 34px;

   // /* Hide default HTML checkbox */
  input {
     opacity: 0;
     width: 0;
     height: 0;
  }

  // /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider:before{
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  


  input:checked  + .slider {
   background-color: ${backgroundDark};
 }
  input:focus + .slider {
   box-shadow: 0 0 1px ${backgroundDark};
 }




/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

`





