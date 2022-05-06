import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const IconContainer = styled.span`
    margin-left: 10px;
    cursor: pointer;
`

interface TableHeaderCellProps {
    text: string
    onClick: () => void
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ text, onClick }) => {
    return (
        <th>
            {text}
            <IconContainer onClick={onClick}>
                <Icon type={'sort'} />
            </IconContainer>
        </th>
    )
}

export default TableHeaderCell
