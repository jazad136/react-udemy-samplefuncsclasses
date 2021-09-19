import React, { Component } from 'react'

function getTime() { 
    return (new Date()).toLocaleTimeString()
}
function getTime() { 
    return (new Date()).toLocaleDateString()
}
export class TimeApp extends Component {
    render() {
        return (
            <div>
                <div>Current Date</div>
                <h3>{getDate()}</h3>
                <div>Current Time</div>
                <h3>{getTime()}</h3>
            </div>
        )
    }
}

export default TimeApp
