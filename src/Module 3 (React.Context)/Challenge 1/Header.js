import React, {Component} from "react"
import {Consumer} from "./themeContext"

class Header extends Component {
    static contextType = Consumer
    render() {
    const User = this.context
        return (
            <header>
                <p>Welcome, {User}!</p>
            </header>
        )    
    }
}

export default Header
