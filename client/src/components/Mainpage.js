import React, { Component } from "react";
import axios from "axios";
import { Nav } from "./Nav";
import {Footer} from "./Footer";

import "../components/css/Mainpage.css";
export class Mainpage extends Component {

  constructor(props) {
    super(props);
    //set state to be changed while in project
    this.state = {
      selectedFile: [],
      success: '',
      filename: '',
      makePublic: '',
      filepath: '',
      valerrors: ''
    };
    if(localStorage.getItem('firstname') == null){
      this.isloggedin = false;
    }else{
      this.isloggedin = true;
    }
    this.filesuccess = null;  //name of file uploaded!!
    this.fileid = null;
    this.filename = null;
    this.url = null;
    this.openS = null;
    this.handleselectedFile = this.handleselectedFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.trackid = this.trackid.bind(this);
    this.makePublic = this.makePublic.bind(this);
  }

  handleUpload() {
    if(this.state.selectedFile.length === 0){
      this.setState({
        valerrors : 'You forgot to upload a file',
        success: false 
      });
      return;
    }
    if(this.state.filename === ''){
      this.setState({
        valerrors : 'Track name cannot be empty',
        success: false 
      });
      return;
    }else{
     // creating the form data with the name that can be identified at the server
    var fd = new FormData();  //create standard javascript form object
    //file filename,file 
    fd.append('musicUpload',this.state.selectedFile,this.state.filename);
    }
    axios
      .post("http://localhost:8080/music/upload", fd)
      .then(result => {
        if (result.data.errors) {
          return this.setState({
            valerrors: result.data.errors,
            success: false
          });
        }
        else{
          // on successfull upload a second call to store music against the user
          let param = encodeURIComponent(this.state.filepath); //sending in the encoded url
          if(this.state.makePublic !== true){
            this.setState({makePublic: false});
          }
          let urlRoute = "http://localhost:8080/music/insert/"+     //basic route
                          this.state.filename+"/"+                  //filename
                          localStorage.getItem('firstname')+        //email id
                          "/"+param+"/"+                            //encoded filepath
                          this.state.makePublic;                    //public identifier
          axios
              .post(urlRoute)
              .then(res=>{
                if(res.data.errors) 
                return this.setState({
                  valerrors: result.data.errors,
                  success: false
                });
                else{
                  this.filesuccess = this.state.filename; //store in var for display as success of file
                  return this.setState({
                    success: true,
                    makePublic: false
                  });
                }
              });
        }
      });
  }

  handleselectedFile(e) {
    // capture url to local directory & file
    this.filesuccess = '';
    this.setState({
      selectedFile: e.target.files[0],
      filepath: e.target.value,
      success: false,
      valerrors: ''       //remove error dynamically if file is uploaded
    });
  }

  trackid(e){
    this.filesuccess = '';
    this.setState({
      filename: e.target.value,  
      success: false,
      valerrors: ''       //remove error dynamically if trackid is changed
    });
  }

  makePublic(e){
    this.setState({
      makepublic: e.target.checked
    });
  }

  //fetch music uploaded by a person and for loop through the filenames
  render() {
    return this.isloggedin ? (
      <div className="body5">
        <Nav login={this.isloggedin}/>
        <div id="mainpageshow" >
        <div className="bg1" />
          <h1>FACE THE MUSIC!!</h1>
          <input onChange = {this.handleselectedFile} type="file" id="post" className="form-group"/>
          <br/><br/>
          <input onChange = {this.trackid} type="text" className="form-group" placeholder="File name" required/>
          <button onClick={this.handleUpload} className="mainpagebutton">Upload</button>
          <br/>
          <label>Make public?</label>&nbsp;&nbsp;&nbsp;
          <input type="checkbox" onClick={this.makePublic}/>
          <div>{ this.state.success ?
          (<span>{this.filesuccess} uploaded sucessfully</span>) : (<span>{this.state.valerrors}</span>)}
          </div>
        </div>
      <Footer />
    </div>
    ) : (
      <div>
      <Nav/>
      <h3>Please login</h3>
      <Footer/>
      </div>
    );
  }
}
export default Mainpage;