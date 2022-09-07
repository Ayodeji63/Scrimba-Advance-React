import React, {Component} from "react"
import ThemeContext from "./themeContext"
import PropTypes from "prop-types"

function Button (props) {
        return (
            <button className={`${props.mode}-theme`}>
                Switch Theme 
            </button>
        )
    }

export default Button

Button.propTypes = {
    mode:PropTypes.oneOf(["dark", "light"])
    .isRequired
}
Button.defaultProps = {
    mode: "dark"
}