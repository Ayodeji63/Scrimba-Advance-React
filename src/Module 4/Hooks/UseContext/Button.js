import React, { useContext } from 'react'
import { ThemeContext } from './themeContext'


const Button = () => {
    const {theme, toggle} = useContext(ThemeContext)
  return (
   <button className= {`${theme ? "dark" : "light"}-theme`} onClick = {toggle} >Switch Theme</button>
  )
}

export default Button