// Import the React and React DOM Libraries

import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component

const App = () => {
    return <div>Hi there!</div>

}


// Take the react component and show on the screen 

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)