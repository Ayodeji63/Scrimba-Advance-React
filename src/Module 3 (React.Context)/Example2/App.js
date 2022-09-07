import React from "react"
import './App.css'

import Header from "./Header"
import Button from "./Button"
import ThemeContext from "./themeContext"

function App() {
    return (
        <div>
            <Header />
            <ThemeContext.Consumer>
                {mode => <Button mode = {mode} />}
            </ThemeContext.Consumer>
            <Button />
        </div>
    )
}

export default App