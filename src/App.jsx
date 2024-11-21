import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Route,Routes}  from 'react-router-dom' ;
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Single from './pages/Single';
import Wishlist from './pages/Wishlist';



const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/single' element={<Single/>}/>
       <Route path='/wishlist' element={<Wishlist/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App

