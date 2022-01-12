import React, { Component } from 'react'

export class Clock extends Component {
    state = {time: new Date().toLocaleTimeString()}
    
    componentDidMount() { 
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000);
    }

    render() {
        return (
            <div className="time" style={{display: 'block', clear: 'both'}}>
                The time is: {this.state.time}
            </div>
            
        )
    }
}

export default Clock;
