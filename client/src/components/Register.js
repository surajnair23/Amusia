import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";
import {Footer} from "./Footer";

//using export directly with class to export it instead of export default app
// do read documentation on https://reactjs.org/docs/forms.html
export class Register extends Component {
  constructor(props) {
    super(props);
    //initialize props/elements
    this.state = {
      email: "", emailerrors: "",
      firstname: "", fnameerrors:"",
      lastname: "", lnameerrors:"",
      password: "", 
      password_con: "",
      success: false
    };
    this.isloggedin = false;
    //bind events or basically teach functions to read current state
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.redirection = this.redirection.bind(this);
  }

  changeHandler(e) {
    this.setState({
      emailerrors : "",fnameerrors:"",lnameerrors:"",pwderrors:""
    });
    let namereg = new RegExp('^[a-zA-Z]+$');
    let emailreg = new RegExp('(^[^_][A-Za-z0-9\.]+)@([A-Za-z0-9]+).([A-Za-z0-9]+)');
    if(e.target.name === 'firstname'){
      console.log('firstname validation');
      if(!namereg.test(e.target.value)){
        this.setState({fnameerrors: "Only alphabets accepted as first name"});
        return;
      }else{
        this.setState({
          [e.target.name]: e.target.value,
          fnameerrors: ''
        });
      }
    }
    //lastname validation
    if(e.target.name === 'lastname'){
      console.log('lastname validation');
      if(!namereg.test(e.target.value)){
        this.setState({fnameerrors: "Only alphabets accepted as last name"});
        return;
      }else{
        this.setState({
          [e.target.name]: e.target.value,
          fnameerrors: ''
        });
      }
    }
    
    
  }

  submitHandler(e) {
    e.preventDefault();
    
    //always match the post/get request method with routes.js post/get
    axios
      .post("http://localhost:8080/api/register", this.state)
      .then(result => {
        console.log(result);
        if (result.data.errors) {
          return this.setState(result.data);
        }else{
          if(result.data === 'Registration successful!'){
            this.setState({success:true});
            this.redirection(this.state);
            return this.state;
          }
        }
      });
  }

  redirection(e){
    if(this.state.success){
      this.props.history.push("/login");
    }
  }

  render() {
    return (
       <div className="bodyregister">
         <Nav login={this.isloggedin}/> 
        <section id="section-b" className="grid">
        <ul>

          <li>
            <div className="form">
              <img src="img/boston.jpg" alt="" />
              <div className="card-content">
              <form onSubmit={this.submitHandler} className="login-form">
              <span>{this.state.success && <p>You are successfully registerated!</p>}
                    {this.state.emailerrors}{this.state.fnameerrors}
                    {this.state.lnameerrors}</span>
        <input
            type="text"
            onChange={this.changeHandler}
            placeholder="First Name"
            name="firstname"
            id="firstname"
          />
          
          <br />
          <input
            type="text"
            onChange={this.changeHandler}
            placeholder="Last Name"
            name="lastname"
            id="lastname"
          />
          
          <br />
          <input
            type="email"
            placeholder="Email address"
            name="email"
            onChange={this.changeHandler}
            id="emailreg"
          />
          
          <br />
          <input
            type="password"
            onChange={this.changeHandler}
            placeholder="Password"
            name="password"
            id="passwordreg"
          />
          
          <br />
          <input
            type="password"
            onChange={this.changeHandler}
            placeholder="Re-confirm password"
            name="password_con"
            id="password_con"
          />
          
          <br />
          <br />
          <button type="Submit">Submit</button>
        </form>
              </div>
            </div>
          </li>

        </ul>
      </section>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Register);