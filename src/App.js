import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Blog, Careers, Company, Contact, Products, Privacy, Terms_of_Service } from './Pages'

function App() {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' exact element={<Home />} />/>
          <Route path='/company' exact element={<Company />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/careers' exact element={<Careers />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/privacy' exact element={<Privacy/>}/>
          <Route path='/terms-of-service' exact element={<Terms_of_Service/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
