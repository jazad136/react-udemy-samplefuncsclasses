import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
export class App extends Component {
  state = {videos : [] };

  // Different youtube response items
  // response.data.items
  // response.data.id.videoId
  // response.data.items 
  
  onTermSubmit = async term => { 
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    // console.log(response.data.items);
    this.setState({videos: response.data.items})
  }
  
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        {/* I have {this.state.videos.length} videos.  */}
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
