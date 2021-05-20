import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

export const IconStyled = styled.img`
    height: 80px;
    width: auto;
    padding: 0px 20px;
   
`

export const TextStyled = styled.p`
    position: absolute;
    top: calc(100% + 10px);

    &:hover {
        visibility: visible;

    }
`