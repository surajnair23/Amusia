import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import music from '../images/music.jpg';
import mu from '../images/rise.jpg';
import mus from '../images/guitars.jpg';
import k from '../images/k.jpeg';
import h from '../images/l.jpg';
import "../components/css/Blog.css";

export class Blog extends Component{
  constructor(props){
    super(props);
    if(localStorage.getItem('firstname') == null){
      this.isloggedin = false;
    }else{
      this.isloggedin = true;
    }
  }
render(){
  return(
    <div>
    <div className="Appblog">
      <Nav login={this.isloggedin}/>
       <div class="wrapperblog">
  <div class="box1blog">News
  <h1> 420k Monthly Listeners</h1>
  <img src={h}  style={{width:'20%'}}  alt="1"/>
  </div>
  
</div>


<div class="rowblog">
  <div class="columnblog">
  <div class="containerblog">
  <img src={mu} class="imageblog" style={{width:'100%'}}  alt="1"/> 

  <div class="middleblog">
    <div class="textblog">EDM</div>
  </div>
  </div>
           <h1>The Best Music blogs from thousands of top Music blogs in our index using search and social metrics. </h1>
           <h1>Music newsletter is a comprehensive summary of the day's most important blog posts and news articles from the best Music websites on the web, and delivered to your email inbox each morning. </h1>
           
          
            
    </div>


   
  <div class="columnblog">
  <h1>Looking to get your music out there amongst the tastemakers? Well first you need amazing music, because contacting top blogs with mediocre recordings that get thousands of submissions a month never makes an impact</h1>

  <div class="containerblog">
            <img src={music} class="imageblog"  style={{width:'100%'}}  alt="1"/>
            <div class="middleblog">
    <div class="textblog">Live Stage</div>
  </div>
  </div>
    </div>

 <div class="columnblog">
 <div class="containerblog">
  <img src={k} class="imageblog" style={{width:'100%'}}  alt="1"/> 
  <div class="middleblog">
    <div class="textblog">Karaoke</div>
  </div>
  </div>
            <h1>Consequence of Sound is an online music publication updated daily with music news, MP3s, tour dates, album reviews, festival lineups, and more.</h1>
          
            
    </div>
    <div class="columnblog">
  <h1>Hypebot posts daily content for indie musicians and record labels, including blogs about the music business, news and technology. Their posts are usually in-depth and well worth reading, but great tips can often be found in the comments section of their posts too, so remember to scroll down and you might find something interesting.</h1>
  <div class="containerblog">
            <img src={mus} class="imageblog" style={{width:'100%'}}  alt="1"/>
            <div class="middleblog">
    <div class="textblog">Rock</div>
  </div>
  </div>
          
            
    </div>

    
    
   
    </div>
     </div>
     <Footer/>
     </div>
  );
}
}

export default withRouter(Blog);
