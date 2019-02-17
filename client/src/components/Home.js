import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";
import '../components/css/Home.css';
import {Footer} from "./Footer";

export class Home extends Component{
  constructor(props){
    super(props);
    localStorage.clear();
    if(localStorage.getItem('firstname') == null){
      this.isloggedin = false;
    }else{
      this.isloggedin = true;
    }
  }

  render(){
    return(
      <div>
<div className="Homepage">
      <Nav login={this.isloggedin}/><br/><br/>
      <div id="homecarousel" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#homecarousel" data-slide-to={0} className="active" />
          <li data-target="#homecarousel" data-slide-to={1} />
          <li data-target="#homecarousel" data-slide-to={2} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="bg" />
              <img alt="1"/>
              <div class="carousel-caption">
              <h1 className="animate-reveal animate-first">WebDesign Alpha</h1>
           <p className="animate-reveal animate-second">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</p>
             <a href="#section-b" className="btn animate-reveal animate-third">Read More</a>
      </div>
          </div>
          <div className="carousel-item">
          <div className="bg3" />
            <img  alt="1"/>
          </div>
          <div className="carousel-item">
          <div className="bg2" />
            <img  alt="1"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#homecarousel" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#homecarousel" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
      </div>
      <Footer />
      </div>
    )
  }
}
export default withRouter(Home);

