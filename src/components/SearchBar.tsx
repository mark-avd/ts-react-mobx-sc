import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import StyledInput from './UI/StyledInput'
import { store } from '../stores/store'

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
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        store.setSearchTerm(event.target.value)
    }
    return (
        <SearchBarContainer>
            <StyledInput placeholder={'Поиск'} onChange={handleChange} />
            <IconContainer>
                <Icon type={'search'} />
            </IconContainer>
        </SearchBarContainer>
    )
}

export default SearchBar
