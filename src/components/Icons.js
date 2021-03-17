import React from 'react';

import { Wrapper, IconStyled } from '../styles/Icons';
import { TooltipText, TooltipBox, TooltipCard } from '../styles/TooltipStyled';

function Icons({ iconsArr }) {

    const WrappedInTooltips = () => {
        return iconsArr.map(iconObj => {
            return (
                <TooltipCard key={iconObj.text}>
                    <TooltipText>
                        <IconStyled src={iconObj.icon} alt='icon' />
                    </TooltipText>
                    <TooltipBox>
                        <p>{iconObj.text}</p>
                    </TooltipBox>
                </TooltipCard>
            )
        })
    }


    return (
        <Wrapper >
            {WrappedInTooltips()}

        </Wrapper>
    )
}

export default Icons
