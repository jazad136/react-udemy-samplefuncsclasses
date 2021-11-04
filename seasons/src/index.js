import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) { 
        super(props);

        // here we have to initialize the state
        // using the equal sign. 
        this.state = {lat: null, errorMessage: ''}
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState to update the position
                // not set the state element. 
                this.setState({lat: position.coords.latitude})
            },
            // err => console.log(err)
            err => {
                this.setState({errorMessage: err.message})
                console.log(err)
            }
        ); 
    }

    render() { 
        if(this.state.errorMessage && !this.state.lat) { 
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.lat) { 
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>Loading!</div>
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)