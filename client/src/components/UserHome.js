import React,{ Component } from "react";
import { Nav } from "./Nav";
import {Footer} from "./Footer";
import '../components/css/UserHome.css';

export class UserHome extends Component{
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
          <div className="body">
            <Nav login={this.isloggedin}/>
            <header id="userhome" className="grid">
              <div className="bg-image" />
              <div className="content-wrap">
                <h1 className="animate-reveal animate-first">Welcome to Amusia</h1>
                <br/><br/><a href="/MainPage" className="btn animate-reveal animate-second">Lets get started!!</a>
              </div>
            </header>
            
          </div>
          <Footer/>
          </div>
        )
      }
    }

