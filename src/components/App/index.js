import React, { Component } from 'react';
import ImageUploader from '../imageUploader';
import ImagePreview from '../imagePreview';
import '../../index.css';

class App extends Component {
  render() {
    return <div>
      <ImageUploader/>
      <ImagePreview/>
    </div>     
  }
}

export default App;