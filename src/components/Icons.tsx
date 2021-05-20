import React from 'react';

//@ts-ignore
import { Wrapper, IconStyled } from '../styles/Icons.ts';
import { TooltipText, TooltipBox, TooltipCard } from '../styles/TooltipStyled';

interface IProps {
    iconsArr: { text: string, icon: string }[]
}

function Icons({ iconsArr }: IProps) {

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
