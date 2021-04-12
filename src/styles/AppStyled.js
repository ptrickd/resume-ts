import styled from 'styled-components';
import { backgroundDark, backgroundLight, fontColorDark, fontColorLight } from '../constants/Colors';

export const Wrapper = styled.div`
    max-width: 100%;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0 0;

    color: ${props => props.darkTheme ? fontColorDark : fontColorLight};
    background-color: ${props => props.darkTheme ? backgroundDark : backgroundLight};

    display: ${props => props.sideBar ? 'grid;' : ''}
    grid-template-columns: ${props => props.sideBar ? '220px auto;' : ''}
  
`

export const MainViewStyled = styled.div`
    // min-height: 200px;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
`
