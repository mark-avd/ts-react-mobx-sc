import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
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

export default StyledLink
