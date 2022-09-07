import React, {Component} from "react";

class DataFecther extends Component {
    state = {
        loading: false,
        data: null,
        error: ""
    }

    componentDidMount() {
        this.setState({loading:true})
        fetch(this.props.url)
        .then(res => res.json())
        .then(data => this.setState({data: data, loading: false}))
        .catch(error => this.setState({error: error}) )
    }

    render () {
        const {loading, data, error} = this.state
        console.log(loading);
        console.log(data);
        return (
            this.props.children({loading, data, error})
        )
    }
}

export default DataFecther