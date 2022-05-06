import React from 'react'
import searchIcon from '../assets/search-icon.svg'
import sortIcon from '../assets/sort-icon.svg'
import loadingIcon from '../assets/loading-icon.svg'

interface IconProps {
    type: 'search' | 'sort' | 'loading'
}

const Icon: React.FC<IconProps> = ({ type }) => {
    return (
        <>
            {type === 'search' && <img src={searchIcon} alt="search icon" />}
            {type === 'sort' && <img src={sortIcon} alt="sort icon" />}
            {type === 'loading' && (
                <img src={loadingIcon} alt={'loading icon'} />
            )}
        </>
    )
}

export default Icon
