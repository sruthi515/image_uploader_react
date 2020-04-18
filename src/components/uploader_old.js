import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../actions';
import ImageHolder from './imageHolder';

import '../../src/App.css';

class Uploader extends Component {
  constructor(){
    super();
    // this.state = {
    //   pictures: [],
    //   files: [],
    //   urls: [],
    //   isDragging: false
    // }

    this.onDrop = this.onDrop.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    
  }
  
    onDrop(picture) {
        this.setState({
        pictures: this.state.pictures.concat(picture),
        });
        console.log('pictures::',this.state.pictures);
    }

    handleDrags(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // this.setState({
        // 	...this.state,
        // 	isDragging: true
        // });
        
        // this.props.f1(p1)
    }

    handleDragEnter(e) {
        this.handleDrags(e);
    }

    handleDragOver(e) {
        this.handleDrags(e);
    }

    handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        
        this.setState({
            ...this.state,
            isDragging: false
        });
    }

    onChange(e) {
        e.preventDefault()
        const files = e.target.files;
        [].forEach.call(files, this.handleFiles);
    }

    handleDrop(e) {
        console.log('handleDrop: ', e)
        e.stopPropagation();
        e.preventDefault();
        
        const data = e.dataTransfer;
        const files = data.files;
        console.log("Oops...you dropped this: ", files);
        [].forEach.call(files, this.handleFiles);
        this.setState({
            ...this.state,
            isDragging: false
        });
    }

    handleFiles(file) {
        console.log('handleFiles: ', file)
        var reader = new FileReader();
        var self = this;
        reader.onload = (function(theFile) {
        var image = new Image();
        image.src = theFile.target.result;
        image.onload = function() {
            console.log("this.width:::",this.width,this.height);
            var imageUrl = window.URL.createObjectURL(file);
            if(this.width !== 225 && this.height !== 225){
            alert("Sorry, Not able to upload image size should be 1024 x 1024 ");
            }
            else{
                self.setState({
                    files: [file],
                    urls: [imageUrl]
                });
            }
        };
        });
        
        console.log("this.state at handleFiles :::",this.state,reader);
        reader.readAsDataURL(file);
    }
  
   
  render() {

    const { dispatch, visibleImages } = this.props;
    const {urls, files, isDragging} = this.state;
    const dropClass = isDragging ? "dragDrop dragging" : "dragDrop";
    
    return (
      <div className="App">
      
        <div className="uploadInput" >
            <input type="file"
                // onChange={img => dispatch(uploadImage(img))}
                onChange={this.onChange}
                accept="image/*"
                multiple
            />
            <div className={dropClass} 
                onDrop={this.handleDrop}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave} >
                <div className="inside">
                    <span>Drop files here to upload</span>
                    <div><i className="material-icons">file_upload</i></div>
                </div>
            </div>	
        </div> 
        <ImageHolder urlsProp = {this.state.urls}></ImageHolder>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
       visibleImages: state.files
    }
}


function mapDispatchToProps(dispatch) {
    return {
       f1: f1()
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(Uploader);