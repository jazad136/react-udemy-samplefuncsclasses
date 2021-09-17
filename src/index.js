// Import the React and React DOM Libraries

import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component

const App = () => {
    return (
        <div>
            <label class="label" for="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style="background-color: blue; color: white">Submit</button>
        </div>
    );
}


// Take the react component and show on the screen 

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)   