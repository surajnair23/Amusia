import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../components/css/Contact.css";
export class Footer extends Component{
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
<footer id="main-footer" className="grid">
  <div>Suraj Nair&nbsp;&nbsp;&nbsp; Anshul Balamwar&nbsp;&nbsp;&nbsp; Aakash Deogaonkar&nbsp;&nbsp;&nbsp; Hruda Mohod</div>
  <div>Web Design and User Interface</div>
</footer></div>
);
  }
}
export default withRouter(Footer);
