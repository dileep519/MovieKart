import React, { Component } from 'react';
import './Watched.css';
export default class Watched extends Component {
    onClicked=()=>{
        let z=localStorage.getItem("watched");
        z=JSON.parse(z);
        this.props.onWatched(z);
    }
    render(){
        return(
            <div>
                <button onClick={this.onClicked} className="button-watched" type="button">Watched</button>
            </div>
        );
    }
}