import React from 'react'
import StyledTable from '../UI/StyledTable'
import { Post } from '../types'

interface TableProps {
    header: React.ReactElement
    data: Post[]
}

const Table: React.FC<TableProps> = ({ header, data }) => {
    return (
        <StyledTable>
            <thead>
                <tr>{header}</tr>
            </thead>
            <tbody>
                {data.map((data) => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.body}</td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

export default Table
