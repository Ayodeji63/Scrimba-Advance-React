import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Button extends Component {
    render () {
        console.log(this.context);
        const mode = this.context
        return (
            <button className={`${mode}-theme`}>
                Switch Theme 
            </button>
        )
    }
}

Button.contextType = ThemeContext

export default Button