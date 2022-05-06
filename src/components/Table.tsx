import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import Icon from './Icon'
import StyledTable from './UI/StyledTable'
import pageSlicer from '../utils/pageSlicer'
import { store } from '../stores/store'

const IconContainer = styled.span`
    margin-left: 10px;
    cursor: pointer;
`

interface TableProps {
    page: number
    postsPerPage: number
}

const Table: React.FC<TableProps> = ({ page, postsPerPage }) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>
                        ID
                        <IconContainer onClick={store.sortById}>
                            <Icon type={'sort'} />
                        </IconContainer>
                    </th>
                    <th>
                        Заголовок
                        <IconContainer onClick={store.sortByTitle}>
                            <Icon type={'sort'} />
                        </IconContainer>
                    </th>
                    <th>
                        Описание
                        <IconContainer onClick={store.sortByBody}>
                            <Icon type={'sort'} />
                        </IconContainer>
                    </th>
                </tr>
            </thead>
            <tbody>
                {store.posts
                    .slice(...pageSlicer(postsPerPage, page))
                    .map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
            </tbody>
        </StyledTable>
    )
}

export default observer(Table)
