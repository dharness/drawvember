import React, { Component } from 'react';
import { PhotoSwipe, PhotoSwipeGallery } from 'react-photoswipe'
import loadImages from './services/loadImages'
import prompts from './services/prompts'
import 'react-photoswipe/lib/photoswipe.css';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      prompts,
    }
    this.date = new Date()
    this.getThumbnailContent = this.getThumbnailContent.bind(this)
    this.getPrompt = this.getPrompt.bind(this)
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

  getPrompt() {
    if(this.date.getMonth() === 10) {
      return `Prompt: ${this.state.prompts[this.date.getDate()]}`
    }
    return `Drawvember hasn't begun`
  }

  render() {
    return (
      <div className="App">
        <h1 className="prompt">{this.getPrompt()}</h1>
        {
          (this.state.items.length > 0) && 
          <PhotoSwipeGallery items={this.state.items} thumbnailContent={this.getThumbnailContent}/>
        }
      </div>
    );
  }
}

export default App;
