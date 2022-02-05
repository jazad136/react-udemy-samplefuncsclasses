import React, {Component} from 'react';
import SearchBar from './SearchBar'
class App extends Component { 
    onSearchSubmit(term) { 
        console.log(term);
    }
    
    render() { 
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;