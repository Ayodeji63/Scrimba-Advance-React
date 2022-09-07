import React, { useContext } from 'react'
import { ThemeContext } from './themeContext'

const Header = () => {
    const {theme, toggle} = useContext(ThemeContext)
    return (
  <header className={`${theme ? "dark" : "light"}-theme`} > <h2> {theme ? "Dark" : "Light"} Theme</h2> </header>   
  )
}

export default Header