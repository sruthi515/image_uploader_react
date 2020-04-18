import React, { Component } from 'react';
import '../../src/App.css';

class ImageHolder extends Component {
  
  render() {
    
    return (
        <div className="imagePreviewContainer">
            {
                this.props.files_info && (this.props.files_info.map((file_details, i) => (
                    <div className='containerCss'>
                    
                        <div className="previewItem">
                            <p>Horizontal View</p>
                            <img className="horizontalImagePreview" src={file_details.url} alt='img'/>
                        </div>

                        <div className="previewItem">
                            <p>Vertical View</p>
                            <img className="verticalImagePreview" src={file_details.url} alt='img'/>
                        </div>

                        <div className="previewItem">
                            <p>Horizontal Small View</p>
                            <img className="horizontalSmallImagePreview" src={file_details.url} alt='img'/>
                        </div>

                        <div className="previewItem">
                            <p>Gallery View</p>
                            <img className="galleryImagePreview" src={file_details.url} alt='img'/>
                        </div>

                    </div>
                )))
            }
        </div>
    );
  }
}

export default ImageHolder;