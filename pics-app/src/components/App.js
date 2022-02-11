import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
class App extends Component {
    state = { images: [] };

     onSearchSubmit = async (term) => {
      // Authorization: Client-ID YOUR_ACCESS_KEY
      const response = await unsplash.get("/search/photos", {
        params: { query: term },
      });
      // console.log(response.data.results)
      console.log(this);
      this.setState({ images: response.data.results });
    }
    
    render() { 
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: { this.state.images.length } images.
            </div>
        );
    }
}

export default App;