import React, { Component } from 'react';
// import Printres from '../Printres/Printres';
import './Watchlist.css';
export default class Watchlist extends Component{
    // state={
    //     val:[]
    // }
    onClicked=()=>{
        let z=localStorage.getItem("watchlist");
        z=JSON.parse(z);
        this.props.onWatch(z);
    }
    render(){
        // let data=this.state.val;
        return(
            <div>
                <button onClick={this.onClicked} className="button-watch" type="button" >Watchlist</button>
            </div>
        );
    }
}