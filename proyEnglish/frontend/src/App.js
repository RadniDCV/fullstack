import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from './pages/Menu'
import Home from './pages/Home'
import Lesson01 from './pages/Lesson01'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/lesson01" element={<Lesson01/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App