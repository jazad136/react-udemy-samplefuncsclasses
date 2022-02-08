import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
class App extends Component { 
    async onSearchSubmit(term) { 
        // Authorization: Client-ID YOUR_ACCESS_KEY
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers: { 
                Authorization: 
                    'Client-ID Lj_zHL_K7CFrtEIclKlCDqskD5tNdKbG2W-43LR0YCg'
            }
        });
        console.log(response.data.results)

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