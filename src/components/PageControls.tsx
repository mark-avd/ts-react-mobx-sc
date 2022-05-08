import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StyledLink from './UI/StyledLink'

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const DirectLinksContainer = styled.div`
    display: flex;
    font-style: italic;
`

const DirectLink = styled(StyledLink)<{ $isActive: boolean }>`
    line-height: 25px;
    font-size: 18px;
    font-weight: 700;
    margin: 0 7px;
    color: ${(props) => (props.$isActive ? '#7EBC3C' : '#474955')};

    &:hover {
        color: ${(props) => (props.$isActive ? '#7EBC3C' : '#000')};
    }
`

interface PageControlsProps {
    currentPage: number
    pages: number[]
    lastPage: number
}

const PageControls: React.FC<PageControlsProps> = ({ currentPage, pages, lastPage }) => {
    const [isFirstPage, setFirstPage] = useState<boolean>(false)
    const [isLastPage, setLastPage] = useState<boolean>(false)
    useEffect(() => {
        currentPage === 1 ? setFirstPage(true) : setFirstPage(false)
        currentPage === lastPage || lastPage === 0
            ? setLastPage(true)
            : setLastPage(false)
    }, [currentPage, lastPage])
    return (
        <LinksContainer>
            {isFirstPage ? (
                <StyledLink
                    to={'#'}
                    style={{ visibility: 'hidden' }}
                    onClick={(event) => event.preventDefault()}
                >
                    Назад
                </StyledLink>
            ) : (
                <StyledLink to={currentPage === 2 ? '/' : `/${currentPage - 1}`}>
                    Назад
                </StyledLink>
            )}
            <DirectLinksContainer>
                {pages?.map((item) => (
                    <DirectLink
                        key={item}
                        to={item === 1 ? '/' : `/${item}`}
                        $isActive={currentPage === item}
                    >
                        {item}
                    </DirectLink>
                ))}
            </DirectLinksContainer>
            {isLastPage ? (
                <StyledLink
                    to={'#'}
                    style={{ visibility: 'hidden' }}
                    onClick={(event) => event.preventDefault()}
                >
                    Далее
                </StyledLink>
            ) : (
                <StyledLink to={`/${currentPage + 1}`}>Далее</StyledLink>
            )}
        </LinksContainer>
    )
}

export default PageControls
