import React, { Component } from 'react';
import '../components/css/FAQs.css';
import { Nav } from "./Nav";
import Footer from './Footer';
import axios from 'axios';

export class Playlist extends Component{
    constructor(props){
        super(props);
        this.playlist= null;
        if(localStorage.getItem('firstname') == null){
            this.isloggedin = false;
          }else{
            this.isloggedin = true;
          }
        this.state={
            filearray : []
        }
        this.value='';
    }

    componentWillMount(){
        let forf = "testest";
        console.log("component called");
        let url= "http://localhost:8080/music/show/"+localStorage.getItem('firstname')+"/"+forf;
          axios
            .get(url)
            .then(result=>{
                if(result.data.errors){
                    return console.log(result.data.errors);
                }else{
                    if(result.data){
                        console.log(JSON.stringify(result.data));
                        // this.setState = { filearray : JSON.stringify(result.data)};
                        this.setState({filearray:result.data});
                        // this.value = this.state.filearray[0];
                        console.log(result.data);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        // return this.isloggedin && this.state.filearray !==null ?
        const filearrayL = this.state.filearray;
        // console.log(filearrayL);
        let valarray='';
        if(filearrayL.length >0){
            console.log(filearrayL.length);
            valarray = filearrayL.map(obj=>{
                return (
                    <div key={obj._id}>
                        <label>{obj.filename}</label><br></br>
                    <audio controls><source src={obj.filepath} /><br></br></audio>
                    </div>
                )
            })
        }
        return(
            <div>
                <Nav login={this.isloggedin}/>
            <div>
                {valarray}
            </div>
            <Footer/>
            </div>
        );
        // return this.isloggedin ?
        // (
        // <div>
        //     <Nav login={this.isloggedin}/>
        //     {/* {console.log(this.state.filearray)}
        //     {console.log(this.value.filepath)} */}
        //     <valarray/>
        // </div>
        // )
        // :
        // (
        //     <div>
        //     <Nav/>
        //     <h3>Please login</h3>
        //     <Footer/>
        //     </div>
        // );
    }
}