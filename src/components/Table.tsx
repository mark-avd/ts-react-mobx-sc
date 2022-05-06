import React from 'react'
import styled from 'styled-components'
import { store } from '../stores/store'
import { observer } from 'mobx-react'
import Icon from './Icon'

const StyledTable = styled.table`
    border-collapse: collapse;
    margin: 15px 0;

    thead {
        background: #474955;
        color: #fff;
    }

    th {
        padding: 19px 23px 16px;
    }

    tr {
        td:first-child {
            text-align: center;
            width: 10%;
        }

        td:nth-child(2) {
            width: 50%;
            padding: 8px;
        }

        td:last-child {
            padding: 11px 15px;
        }
    }

    td {
        border: 1px solid #e3e6ec;
        vertical-align: center;
        height: 87px;
    }
`

const IconContainer = styled.span`
    margin-left: 10px;
`

const Table: React.FC = () => {
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
                        Описание{' '}
                        <IconContainer onClick={store.sortByBody}>
                            <Icon type={'sort'} />
                        </IconContainer>
                    </th>
                </tr>
            </thead>
            <tbody>
                {store.posts.map((post) => (
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
