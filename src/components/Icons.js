import React from 'react';

import { Wrapper, IconStyled } from '../styles/Icons';

function Icons({ icon1, icon2, icon3, icon4, icon5 }) {


    return (
        <Wrapper >
            <IconStyled src={icon1} alt='icon' />
            <IconStyled src={icon2} alt='icon' />
            <IconStyled src={icon3} alt='icon' />
            <IconStyled src={icon4} alt='icon' />
            <IconStyled src={icon5} alt='icon' />
        </Wrapper>
    )
}

export default Icons
