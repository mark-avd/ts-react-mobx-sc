import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import LoadingDummy from '../components/LoadingDummy'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'
import PageControls from '../components/PageControls'
import TableHeaderCell from '../components/TableHeaderCell'
import { store } from '../stores/store'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 78px;
`

const MainPage: React.FC = () => {
    const { page = 1 } = useParams()
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        store.fetchPosts().then(() => setLoading(false))
    }, [])
    return (
        <MainContainer>
            <SearchBar />
            {isLoading ? (
                <LoadingDummy />
            ) : (
                <>
                    <Table
                        header={
                            <>
                                <TableHeaderCell text={'ID'} onClick={store.sortById} />
                                <TableHeaderCell
                                    text={'Заголовок'}
                                    onClick={store.sortByTitle}
                                />
                                <TableHeaderCell
                                    text={'Описание'}
                                    onClick={store.sortByBody}
                                />
                            </>
                        }
                        data={store.paginate(store.searchResult(), Number(page))}
                    />
                    <PageControls
                        currentPage={Number(page)}
                        pages={store.pages}
                        lastPage={store.maxPages}
                    />
                </>
            )}
        </MainContainer>
    )
}

export default observer(MainPage)
