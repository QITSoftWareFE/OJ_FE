import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/index'

export default function IndexRoute() {
    return (
        <Routes>
            {/* To user login */}
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}