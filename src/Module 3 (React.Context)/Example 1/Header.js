import React, { Component } from "react";
import ThemeContext from "./themeContext";

class Header extends Component {
    static contextType = ThemeContext
    render () {
        const mode = this.context
        console.log(mode);
        return (
           <header className={`${mode}-theme`}>
            <h2>{mode} Theme</h2>
           </header>
        )
    }
}


export default Header