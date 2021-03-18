import styled from 'styled-components';
import { navBgDark, navBgLight, fontColorDark, fontColorLight, backgroundDark, backgroundLight } from '../constants/Colors';

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${props => props.darkTheme ? navBgDark : navBgLight};
  text-align: center;
  font-size: 1.2rem;

  padding: 3% 0%;

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





