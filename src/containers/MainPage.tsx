import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import LoadingDummy from '../components/LoadingDummy'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'
import { store } from '../stores/store'
import { useParams } from 'react-router-dom'
import PageControls from '../components/PageControls'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 78px;
`

const MainPage: React.FC = () => {
    const { page = 1 } = useParams()
    const [postsPerPage] = useState(10)
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
                    <Table page={Number(page)} postsPerPage={postsPerPage} />
                    <PageControls page={Number(page)} />
                </>
            )}
        </MainContainer>
    )
}

export default observer(MainPage)
