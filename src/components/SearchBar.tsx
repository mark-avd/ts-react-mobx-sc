import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const SearchBarContainer = styled.div`
    position: relative;
    margin-top: 15px;
    width: 50%;
`

const StyledInput = styled.input`
    background: #5a5c66;
    color: #fff;
    padding: 18px 26px 15px 26px;
    outline: none;
    width: 100%;
`
const IconContainer = styled.span`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
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
