import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { store } from '../stores/store'
import { observer } from 'mobx-react'

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const PageSwitcher = styled(Link)`
    color: #474955;
    line-height: 33px;
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    user-select: none;

    &:hover {
        color: #000;
    }
`

const DirectLinksContainer = styled.div`
    display: flex;
`

const DirectLink = styled(PageSwitcher)<{ $isActive: boolean }>`
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
    page: number
}

const PageControls: React.FC<PageControlsProps> = ({ page }) => {
    const [isFirstPage, setFirstPage] = useState<boolean>(false)
    const [isLastPage, setLastPage] = useState<boolean>(false)
    useEffect(() => {
        page === 1 ? setFirstPage(true) : setFirstPage(false)
        page === store.lastPage ? setLastPage(true) : setLastPage(false)
    }, [page])
    return (
        <LinksContainer>
            {isFirstPage ? (
                <PageSwitcher
                    to={'#'}
                    style={{ visibility: 'hidden' }}
                    onClick={(event) => event.preventDefault()}
                >
                    Назад
                </PageSwitcher>
            ) : (
                <PageSwitcher to={`/${page - 1}`}>Назад</PageSwitcher>
            )}
            <DirectLinksContainer>
                {store.pages.map((item) => (
                    <DirectLink key={item} to={`/${item}`} $isActive={page === item}>
                        {item}
                    </DirectLink>
                ))}
            </DirectLinksContainer>
            {isLastPage ? (
                <PageSwitcher
                    to={'#'}
                    style={{ visibility: 'hidden' }}
                    onClick={(event) => event.preventDefault()}
                >
                    Далее
                </PageSwitcher>
            ) : (
                <PageSwitcher to={`/${page + 1}`}>Далее</PageSwitcher>
            )}
        </LinksContainer>
    )
}

export default observer(PageControls)
