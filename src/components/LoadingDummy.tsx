import React from 'react'
import Icon from './Icon'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 40vh;
`

const LoadingDummy: React.FC = () => {
    return (
        <StyledDiv>
            <Icon type={'loading'} />
        </StyledDiv>
    )
}

export default LoadingDummy
