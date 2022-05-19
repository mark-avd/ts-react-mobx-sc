import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const IconContainer = styled.span<{ $descending: boolean }>`
    margin-left: 10px;
    cursor: pointer;

    img {
        transform: rotate(${(props) => (props.$descending ? '180' : '0')}deg);
        transition: transform ease 200ms;
    }
`

interface TableHeaderCellProps {
    text: string
    onClick: (descending: boolean) => void
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ text, onClick }) => {
    const [descending, setDescending] = useState(false)
    const handleClick = () => {
        onClick(descending)
        setDescending((prevState) => !prevState)
    }
    return (
        <th>
            {text}
            <IconContainer $descending={!descending} onClick={handleClick}>
                <Icon type={'sort'} />
            </IconContainer>
        </th>
    )
}

export default TableHeaderCell
