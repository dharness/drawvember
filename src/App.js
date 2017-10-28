import React, { Component } from 'react';
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipe, PhotoSwipeGallery } from 'react-photoswipe'
import loadImages from './services/loadImages'
import './App.css';



class App extends Component {

  constructor() {
    super()
    this.state = { items: [] }
    this.getThumbnailContent = this.getThumbnailContent.bind(this)
  }

  componentDidMount() {
    loadImages().then(imgData => {
      this.setState({ items: imgData })
    })
  }

  getThumbnailContent(item) {
    const width = 200;
    const height = item.h*200/item.w;
    return (
      <img src={item.src} width={width} height={height}/>
    );
  }

  render() {
    return (
      <div className="App">
        {
          (this.state.items.length > 0) && 
          <PhotoSwipeGallery items={this.state.items} thumbnailContent={this.getThumbnailContent}/>
        }
      </div>
    );
  }
}

export default App;
