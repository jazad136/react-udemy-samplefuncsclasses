// Import the React and React DOM Libraries

import React from 'react'
import ReactDOM from 'react-dom'
//import TimeApp from 'TimeApp'
// Create a react component

function getTime() { 
    return (new Date()).toLocaleTimeString()
}
const App = () => {
    // const buttonText = 'Click Me!';
    // const buttonText = ['Hi', 'There'];
    // const buttonText = ['10', '20'];

    const buttonText = {text: 'Click me now'}
    return (
        <div>
            
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>

            
        </div>
    );
}


// Take the react component and show on the screen 

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)   