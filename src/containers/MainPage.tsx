import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import LoadingDummy from '../components/LoadingDummy'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'
import { store } from '../stores/store'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 78px;
`

const MainPage: React.FC = () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        store.fetchPosts().then(() => setLoading(false))
    }, [])
    return (
        <MainContainer>
            <SearchBar />
            {isLoading ? <LoadingDummy /> : <Table />}
        </MainContainer>
    )
}

export default observer(MainPage)
