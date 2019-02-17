import React,{ Component } from "react";
import { Nav } from "./Nav";
import { withRouter } from "react-router-dom";
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
      <div className="App">
      <Nav login={this.isloggedin}/>
      <div className="App1">
      <div className="image" />
<div class="wrapper">

  <div class="box1">
  <h1>About Us</h1>
  <h5>As the world’s largest music and audio platform, Amusia lets people discover and 
  enjoy the greatest selection of music from the most diverse creator community on earth.
  The platform has become renowned for its unique content and features, including the ability 
  to share music and connect directly with artists, as well as unearth breakthrough tracks, 
  raw demos, podcasts and more. This is made possible by an open platform that directly 
  connects creators and their fans across the globe. Music and audio creators use Amusia
  to both share and monetise their content with a global audience, as well as receive detailed 
  stats and feedback from the Amusia community.</h5>
  <h5>With Amusia, it’s easy to find the right music for every moment – on your phone, your computer, your tablet and more.
    There are millions of tracks on Amusia. So whether you’re working out, partying or relaxing, the right music is always 
    at your fingertips. Choose what you want to listen to, or let Amusia surprise you.</h5>
  </div>

  <div class="box2">
  <h1>Customer Service and Support</h1>
  <h5>1.Check out our FAQs to learn how to get the most out of Amusia and your music.</h5>
  <h5>2.Get fast support from expert Amusia users</h5>
  <h5>3.Contact our Customer Support if you don't find a solution on our support site or Community.</h5>
  </div>

   <div class="box3">
   <h1>Amusia HQ</h1>
   <h5>Amusia USA Inc
      45 W. 18th Street
      7th Floor
      New York, NY 10011
      USA
      office@amusia.com</h5>
   </div>
</div>







</div>
      </div>
    );
  }
}
export default  withRouter(AboutUs);
