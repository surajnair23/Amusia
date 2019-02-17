import React from 'react';
import { withRouter } from "react-router-dom";

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}



export class Nav extends React.Component {
  
  render() {
    return this.props.login ? (
      <nav id="navhome" className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="/UserHome">Amusia</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem path="/aboutus" name="About" />
            <NavItem path="/blog" name="Blog" />
            <NavItem path="/careers" name="Careers"/>
            <NavItem path="/contactus" name="Contact"/>
            <NavItem path="/FAQs" name="FAQs"/>
            <NavItem path="/Playlist" name="Playlist"/>
            <NavItem path="/" name="Log out"/>
          </ul>
        </div>  
      </nav>
    ) :(
      <nav id="navba" className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="/">Amusia</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem path="/aboutus" name="About" />
            <NavItem path="/careers" name="Careers"/>
            <NavItem path="/contactus" name="Contact"/>
            <NavItem path="/FAQs" name="FAQs"/>
            <NavItem path="/login" name="Login" />
          </ul>

        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
