import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";

import {Footer} from "./Footer";
import "../components/css/Careers.css";
// var Carousel = require('react-responsive-carousel').Carousel;
export class Careers extends Component{
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
    <div>
      <Nav login={this.isloggedin}/>
        {/* Main Area */}
          <div className="jumbotron1" >
    	      <p>JOIN THE CRAZE!</p>
 	        </div>
      <div id="main">
        
        {/* Section B */}
        <section id="section-b" className="grid">
          <ul className="animate-reveal animate-first">
            <li className="gridbox" >
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">Designing Manager</h3>
                  <p>Take the responsibility of managing design or graphics teams and departments.</p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                 </div>
              </div> 
            </li>
            <li>
              <div className="card">
                <div className="card-content"> 
                  <h3 className="card-title">Creative Strategist</h3>
                  <p> We need someone who thinks outside the box and comes up with media plans.</p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                 </div>
              </div> 
            </li>
            <li>
               <div className="card"> 
                 <div className="card-content"> 
                  <h3 className="card-title">Creative Strategy Lead</h3>
                  <p>Can work on marketing campaigns and managing creative service projects. </p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                 </div> 
               </div> 
            </li>
          </ul>

           <ul className="animate-reveal animate-first">
            <li >
               <div className="card">
                <div className="card-content"> 
                  <h3 className="card-title">Digital Marketing Manager </h3>
                  <p>Help craft lead nurturing programs and drip communications..</p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                 </div>
              </div> 
            </li>
            <li>
               <div className="card">
                <div className="card-content">
                  <h3 className="card-title">Ads Policy Strategist</h3>
                  <p>Gathering feedback from sales  to define our company’s positioning.</p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                 </div>
              </div> 
            </li>
            <li>
              <div className="card">
                 <div className="card-content">
                  <h3 className="card-title">IT Operations Lead Associate</h3>
                  <p>responding to day-to-day IT issues arising in the office.</p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                </div>
              </div>
            </li>
          </ul>
        </section>
               
      </div>
    </div>
    <Footer/>
    </div>
  )
}
}



export default withRouter(Careers);