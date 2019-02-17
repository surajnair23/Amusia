import React,{ Component } from "react";
import { Nav } from "./Nav";
import { withRouter } from "react-router-dom";

import {Footer} from "./Footer";
import '../components/css/AboutUs.css';
export class AboutUs extends Component {
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
      <div>
      <Nav login={this.isloggedin}/>
      <header id="aboutus" className="grid">
        <div className="bg-about" />
        <div class="center">
        <h5><strong>About Amusia</strong></h5>
        <p><strong>As the world’s largest music and audio platform, Amusia lets people discover and 
  enjoy the greatest selection of music from the most diverse creator community on earth.
  The platform has become renowned for its unique content and features, including the ability 
  to share music and connect directly with artists, as well as unearth breakthrough tracks, 
  raw demos, podcasts and more. This is made possible by an open platform that directly 
  connects creators and their fans across the globe. Music and audio creators use Amusia
  to both share and monetise their content with a global audience, as well as receive detailed 
  stats and feedback from the Amusia community.</strong></p>
  <p><strong>With Amusia, it’s easy to find the right music for every moment – on your phone, your computer, your tablet and more.
    There are millions of tracks on Amusia. So whether you’re working out, partying or relaxing, the right music is always 
    at your fingertips. Choose what you want to listen to, or let Amusia surprise you.</strong></p>
        </div>
             
      </header>
      <Footer/>
      </div>
    );
  }
}
export default  withRouter(AboutUs);
