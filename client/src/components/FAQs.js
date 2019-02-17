import React, { Component } from 'react';
import '../components/css/FAQs.css';
// import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";

  export class FAQs extends Component{
    constructor(props){
      super(props);
      if(localStorage.getItem('firstname') == null){
        this.isloggedin = false;
      }else{
        this.isloggedin = true;
      }
    }

  render() {
    return (
      <div className="App">
    <Nav login={this.isloggedin}/>
      <h1>FAQs</h1>

  <div class="wrapper">
  <div>What connection do I need to use Amusia?</div>
  <div>Does Amusia stream on EDGE (2G, mobile network)?</div>
  <div>I have limited internet. How much bandwidth Spotify need?</div>
  <div>How I can delete duplicates from my playlists?</div>
  <div>How I can check a bitrate of Amusia songs?</div>
  <div>Where I can reset my password?</div>
  <div>What happens to my stats if I delete my track or account?</div>
  <div>What was the motivation behind Amusia?</div>
  <div>Does Amusia support shuffle & repeat?</div>
  </div>
    

  </div>
    );
  }
}

export default FAQs;
