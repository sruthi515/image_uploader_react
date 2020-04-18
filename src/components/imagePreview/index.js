import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImagePreview extends Component {
  
  render() {
    
    return (
        <div className="imagePreviewContainer">
            {
                this.props.files_info && (this.props.files_info.map((file_details, i) => (
                    <div className='containerCss'>
                    
                        <div className="previewItem">
                            <p>Horizontal View (755 x 450)</p>
                            <img className="horizontalImagePreview" src={file_details.url} alt='img'/>
                        </div>

                        <div className="previewItem">
                            <p>Vertical View (365 x 450)</p>
                            <img className="verticalImagePreview" src={file_details.url} alt='img'/>
                        </div>

                        <div className="previewItem">
                            <p>Horizontal Small View (365 x 212)</p>
                            <img className="horizontalSmallImagePreview" src={file_details.url} alt='img'/>
                        </div>

                        <div className="previewItem">
                            <p>Gallery View (380 x 380)</p>
                            <img className="galleryImagePreview" src={file_details.url} alt='img'/>
                        </div>

                    </div>
                )))
            }
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        files_info: state.files_info,
        isDragging: state.isDragging
    }
}

export default connect(mapStateToProps)(ImagePreview);
