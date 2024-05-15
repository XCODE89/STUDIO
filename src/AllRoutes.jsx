import Error404 from './containers/errors/Error404'
import Home from './containers/pages/Home'
import Cases from './containers/pages/Cases'
import Services from './containers/pages/Services'
import About from './containers/pages/About'
import Blog from './containers/pages/Blog'
import Careers from './containers/pages/Careers'
import Contact from './containers/pages/Contact'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from "framer-motion"

import React from 'react'

const AllRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='*' element={<Error404/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/casos' element={<Cases/>}/>
                <Route path='/servicios' element={<Services/>}/>
                <Route path='/nosotros' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/carreras' element={<Careers/>}/>
                <Route path='/contacto' element={<Contact/>}/>
            </Routes>
        </AnimatePresence>
  )
}

export default AllRoutes
