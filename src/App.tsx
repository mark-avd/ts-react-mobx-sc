import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './containers/MainPage'
import './App.css'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/:page'} element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
