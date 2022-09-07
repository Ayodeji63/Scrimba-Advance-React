import React from 'react'
import { Link, Routes, Route } from "react-router-dom"
import About from './About'
import Home from './Home'

const App = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>

    <Routes>
        <Route exact path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        {/* <Route path='/about'><About /></Route> */}
    </Routes>
    </div>
  )
}

export default App