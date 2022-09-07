import React from "react"
import "./App.css"

import Header from "./Header"
import {Consumer} from "./themeContext"

function App() {
    
    return (
       <Consumer>
       {value => (
            <div>
            <Header />
            <main>
                <p className="main">No new notifications, {value}! 🎉</p>
            </main>
        </div>
       )}
       </Consumer>
    )
}


export default App