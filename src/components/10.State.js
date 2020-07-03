import React, { Component } from 'react';

class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Change"
        }
    }

    changeText = () => {
        this.setState({
           text: "Changed"
        })
    }

    render() {
        return (
            <button 
                type="button" 
                className="btn btn-primary btn-lg"
                onClick={ this.changeText }>
                { this.state.text }
            </button>
        )
    }
}

export default State;

/* State */
// Là trạng thái component
// Tạo State trong Constructor: gọi this.state. = {key: value,...}
// Gọi state: this.state.key
// Thay đổi State: this.setState({key: value})