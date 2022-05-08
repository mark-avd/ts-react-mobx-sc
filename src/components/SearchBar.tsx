import React from 'react'
import { observer } from 'mobx-react'
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
    right: 16px;
    top: 15px;
`

const SearchBar: React.FC = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        store.setSearchQuery(event.target.value)
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

export default observer(SearchBar)
