import styled from 'styled-components';
import { backgroundDark, backgroundLight, fontColorDark, fontColorLight } from '../constants/Colors';

export const Wrapper = styled.div`
    width: 100%;
    color: ${props => props.darkTheme ? fontColorDark : fontColorLight};
    background-color: ${props => props.darkTheme ? backgroundDark : backgroundLight};
`

export const MainViewStyled = styled.div`
    min-height: 200px;
    width: 100%;
`
