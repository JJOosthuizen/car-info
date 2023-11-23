import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import CarList from '../components/CarList'
import Searched from './Searched'


function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allCars' element={<CarList />} />
            <Route path='/carByName/:search' element={<Searched />} />
        </Routes>
    )
}

export default Pages