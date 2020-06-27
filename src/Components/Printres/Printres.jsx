import React, { Component } from 'react';
import Singleval from './SingleVal/Singleval';
import './Printres.css';
export default class Printres extends Component{
    printdata=()=>{
        if(this.props.data){
        return this.props.data.map((e,i)=>{
            return <Singleval key={i} isButvis={this.props.isButvis}   data={e}/>
          })
        }
    }
    render(){
        return(
        <div className="Print-data">
            {this.printdata()}
        </div>
        );
    }
}