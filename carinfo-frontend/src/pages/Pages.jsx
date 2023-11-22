import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import CarList from '../components/CarList'


function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allCars' element={<CarList />} />
                {/* <Route path='/carByName/:search' element={<} */}
            </Routes>
        </BrowserRouter>
    )
}

export default Pages