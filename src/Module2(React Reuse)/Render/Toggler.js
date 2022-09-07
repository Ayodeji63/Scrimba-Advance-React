import React, {Component} from "react"

class Toggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }
    
    static defaultProps = {
        defaultOnValue: false
    }
    
    toggle = () => {
        this.setState(prevState => ({on: !prevState.on}))
    }

    render() {
        return (
           
        this.props.children({
            on: this.state.on,
            toggle: this.toggle
        })
         
        )
    }
}

export default Toggler