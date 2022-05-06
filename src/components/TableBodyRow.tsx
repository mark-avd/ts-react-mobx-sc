import React from 'react'

interface TableBodyRowProps {
    id: number
    title: string
    body: string
}

const TableBodyRow: React.FC<TableBodyRowProps> = ({ id, body, title }) => {
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
        </tr>
    )
}

export default TableBodyRow
