import Error404 from './containers/errors/Error404'
import Home from './containers/pages/Home'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import Cases from './containers/pages/Cases'
import Services from './containers/pages/Services'
import About from './containers/pages/About'
import Blog from './containers/pages/Blog'
import Careers from './containers/pages/Careers'
import Contact from './containers/pages/Contact'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element={<Error404/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/casos' element={<Cases/>}/>
          <Route path='/servicios' element={<Services/>}/>
          <Route path='/nosotros' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/carreras' element={<Careers/>}/>
          <Route path='/contacto' element={<Contact/>}/>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
