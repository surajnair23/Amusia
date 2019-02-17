import React, { Component } from 'react';
import music from './music.jpg';
import mu from './rise.jpg';
import mus from './guitars.jpg';
import k from './k.jpeg';
import h from './l.jpg';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
   <div className="App">
      {/* <div class="row"> </div>
        <div class="column">
            <div class="container">
            <img src={logo} className="image" style={{width:'100%'}} />
            <img src={logo} className="image" style={{width:'100%'}} />
                <div class="middle">
                  <div class="text">New Playlists</div>
                </div>
            </div>

            <div class="container">
            <img src={logo} className="image" style={{width:'100%'}} />
                <div class="middle">
                  <div class="text">New Playlists</div>
                </div>
            </div>

          </div> */}

          <div class="wrapper">
  <div class="box1">News
  <h1> 420k Monthly Listeners</h1>
  <img src={h}  style={{width:'20%'}} />
  </div>
  
</div>


          <div class="row">
  <div class="column">
  <div class="container">
  <img src={mu} class="image" style={{width:'100%'}} /> 
  <div class="middle">
    <div class="text">EDM</div>
  </div>
  </div>
           <h1>The Best Music blogs from thousands of top Music blogs in our index using search and social metrics. </h1>
           <h1>Music newsletter is a comprehensive summary of the day's most important blog posts and news articles from the best Music websites on the web, and delivered to your email inbox each morning. </h1>
           
          
            
    </div>


   
  <div class="column">
  <h1>Looking to get your music out there amongst the tastemakers? Well first you need amazing music, because contacting top blogs with mediocre recordings that get thousands of submissions a month never makes an impact</h1>
  {/* <img src={logo}  style={{width:'100%'}} /> */}
  <div class="container">
            <img src={music} class="image"  style={{width:'100%'}} />
            <div class="middle">
    <div class="text">Live Stage</div>
  </div>
  </div>
    </div>

 <div class="column">
 <div class="container">
  <img src={k} class="image" style={{width:'100%'}} /> 
  <div class="middle">
    <div class="text">Karaoke</div>
  </div>
  </div>
            <h1>Consequence of Sound is an online music publication updated daily with music news, MP3s, tour dates, album reviews, festival lineups, and more.</h1>
          
            
    </div>
    <div class="column">
  <h1>Hypebot posts daily content for indie musicians and record labels, including blogs about the music business, news and technology. Their posts are usually in-depth and well worth reading, but great tips can often be found in the comments section of their posts too, so remember to scroll down and you might find something interesting.</h1>
  <div class="container">
            <img src={mus} class="image" style={{width:'100%'}} />
            <div class="middle">
    <div class="text">Rock</div>
  </div>
  </div>
          
            
    </div>

    
    
   
    </div>
    
    </div>
   

    );
  }
}

export default Blog;
