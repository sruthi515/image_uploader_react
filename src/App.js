import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      pictures: [],
      files: [],
      urls: [],
      isDragging: false,

      dimensions: {}
      
    }

    this.onDrop = this.onDrop.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.onRemove = this.onRemove.bind(this);
    
  }
  
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
    console.log('pictures::',this.state.pictures);
  }


	onRemove(index) {
		var {files, urls} = this.state;
		let newFiles = files.filter((file, i) => i !== index);
		let newUrls = urls.filter((url, i) => i !== index);
		
		this.setState({
			...this.state,
			files: newFiles,
			urls: newUrls
		});
	}
	
	handleDrags(e) {
		e.preventDefault();
		e.stopPropagation();
		
		this.setState({
			...this.state,
			isDragging: true
		});
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

    //   reader.onloadend = () => {
    //     var imageUrl = window.URL.createObjectURL(file);
    //     console.log("this.width at on load end:::",this.width,this.height);
    //     this.setState({
    //       files: [file],
    //       urls: [imageUrl]
    //     });
    // }
    console.log("this.state at handleFiles :::",this.state,reader);
    reader.readAsDataURL(file);
    
  }
  
   
  render() {
      
    console.log("this.state:::::",this.state);

    const {urls, files, isDragging} = this.state;
    const dropClass = isDragging ? "dragDrop dragging" : "dragDrop";
    
    return (
      <div className="App">
      
        <div className="uploadInput" >
            <input type="file"
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
                    <span>Drop files here</span>
                    <div><i className="material-icons">file_upload</i></div>
                </div>
            </div>	
        </div> 
        <div className="imagePreviewContainer">
            {
                urls && (urls.map((url, i) => (
                    <div className='containerCss'>
                        {/* <div className="previewItem">
                            <img className="imagePreview" src={url} alt='img'/>
                        </div> */}
                        
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

      </div>
    );
  }
}
export default App;