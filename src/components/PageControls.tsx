import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface PageControlsProps {
    page: number
}

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        color: #474955;
        font-weight: 500;
        font-size: 24px;

        &:visited {
            color: #474955;
        }

        &:hover {
            color: #000;
        }
    }
`

const PageControls: React.FC<PageControlsProps> = ({ page }) => {
    return (
        <LinksContainer>
            <Link to={`/${page - 1}`}>Назад</Link>
            <Link to={`/${page + 1}`}>Далее</Link>
        </LinksContainer>
    )
}

export default PageControls
