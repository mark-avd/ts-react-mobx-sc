import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import StyledInput from './UI/StyledInput'

const SearchBarContainer = styled.div`
    position: relative;
    width: 50%;
`

const IconContainer = styled.span`
    position: absolute;
    cursor: pointer;
    right: 16px;
    top: 15px;
`

const SearchBar: React.FC = () => {
    return (
        <SearchBarContainer>
            <StyledInput placeholder={'Поиск'} />
            <IconContainer>
                <Icon type={'search'} />
            </IconContainer>
        </SearchBarContainer>
    )
}

export default SearchBar
