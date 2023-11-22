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
                {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Pages