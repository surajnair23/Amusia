import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";
import {Footer} from "./Footer";
import "../components/css/Contact.css";
export class ContactUs extends Component{
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
    <div className="contact-us">
    <Nav login={this.isloggedin}/>
    <div className="section-center">
			<div className="container-contact"><h1 >Just say hello!</h1>
				<div className="row">
          <div className="col-md-7 col-md-push-5" id="text">
	          <div className="contact-info">
		          <p>Feel free to get in touch with us. <br/> We are open to creative ideas and projects</p>
              <p> Amusia USA Inc <br/>45 W. 18th Street,7th Floor New York, NY 10011 USA <br/>Phone: +1 999999999<br/>Email: office@amusia.com</p>
           
            </div>
          </div>
          <div className="col-md-4 col-md-pull-7" >
		        <div className="contact-form">
			        <form>
				        <div className="form-group">
					        <input className="form-control" type="text" placeholder="Name"/>
				        </div>
                <div className="form-group">
					        <input className="form-control" type="text" placeholder="Email"/>
				        </div>
                <div className="form-group">
				        	<input className="form-control" type="text" placeholder="PhoneNumber"/>
			        	</div>
                <div className="form-group">
					        <input className="form-control" type="text" placeholder="Queries"/>
				        </div>
				        <div className="form-btn">
						      <button className="submit-btn">Submit</button>
				        </div>
                
			        </form>
		        </div>
	        </div>
        </div>
      </div>
		</div>
    
	</div><Footer/>
  </div>
);
  }
}
export default withRouter(ContactUs);
