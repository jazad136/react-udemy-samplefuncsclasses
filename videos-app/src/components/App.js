import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';

export class App extends Component {
  state = {videos : [] , selectedVideo: null};

  // Different youtube response items
  // response.data.items
  // response.data.id.videoId
  // response.data.items 
  // response.data.items[0].snippet
  // response.data.items[0].snippet.thumbnails.medium.url
  // response.data.items[0].snippet.title

  onTermSubmit = async term => { 
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    // console.log(response.data.items);
    this.setState({videos: response.data.items})
  }
  
  onVideoSelect = (video) => { 
    // console.log('From the App!', video);
    this.setState({selectedVideo : video})

  }

  render() {
    return (
      
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    );
  }
}

export default App;
