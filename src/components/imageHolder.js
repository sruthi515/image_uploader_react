import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../src/App.css';

class ImageHolder extends Component {
  
  render() {
    
    return (
        <div className="imagePreviewContainer">
            {
                this.props.urlsProp && (this.props.urlsProp.map((url, i) => (
                    <div className='containerCss'>
                    
                        <div className="previewItem">
                            <p>Horizontal View</p>
                            <img className="horizontalImagePreview" src={url} alt='img'/>
                        </div>

                        <div className="previewItem">
                            <p>Vertical View</p>
                            <img className="verticalImagePreview" src={url} alt='img'/>
                        </div>

                        <div className="previewItem">
                            <p>Horizontal Small View</p>
                            <img className="horizontalSmallImagePreview" src={url} alt='img'/>
                        </div>

                        <div className="previewItem">
                            <p>Gallery View</p>
                            <img className="galleryImagePreview" src={url} alt='img'/>
                        </div>

                    </div>
                )))
            }
        </div>
    );
  }
}

export default ImageHolder;