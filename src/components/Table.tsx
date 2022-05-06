import React from 'react'
import { observer } from 'mobx-react'
import TableHeaderCell from './TableHeaderCell'
import TableBodyRow from './TableBodyRow'
import StyledTable from './UI/StyledTable'
import pageSlicer from '../utils/pageSlicer'
import { store } from '../stores/store'

interface TableProps {
    page: number
    postsPerPage: number
}

const Table: React.FC<TableProps> = ({ page, postsPerPage }) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <TableHeaderCell text={'ID'} onClick={store.sortById} />
                    <TableHeaderCell text={'Заголовок'} onClick={store.sortByTitle} />
                    <TableHeaderCell text={'Описание'} onClick={store.sortByBody} />
                </tr>
            </thead>
            <tbody>
                {store.posts
                    .filter((item) => {
                        if (
                            item.title
                                .toLowerCase()
                                .includes(store.searchTerm.toLowerCase()) ||
                            item.body
                                .toLowerCase()
                                .includes(store.searchTerm.toLowerCase())
                        ) {
                            return item
                        }
                    })
                    .slice(...pageSlicer(postsPerPage, page))
                    .map((post) => (
                        <TableBodyRow
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    ))}
            </tbody>
        </StyledTable>
    )
}

export default observer(Table)
