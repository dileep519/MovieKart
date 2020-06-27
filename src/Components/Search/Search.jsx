import React, { Component } from 'react';
import './Search.css';
const API_KEY=process.env.REACT_APP_API_KEY;
let value="titanic";
export default class Search extends Component{
    state={
        page:1,
        list:[],
        total:""
    }
    onChanged=(event)=>{
        value=encodeURIComponent(event.target.value);
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${value}&${this.state.page}=1&include_adult=false`).then(res=>res.json()).then(result=>{
            this.setState({list:result.results,total:result.total_pages});
            this.props.onReceived(this.state);
        }).catch((err)=>{
            console.log(err);
        })
    }
    onClicked=(event)=>{
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${value}&${this.state.page}=1&include_adult=false`).then(res=>res.json()).then(result=>{
            this.setState({list:result.results,total:result.page});
            this.props.onReceived(this.state);
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div className="Search-parent">
                <input onChange={this.onChanged} className="search-bar" placeholder="search" type="text"/>
                <button className="Search-but" type="button" onClick={this.onClicked}>Search</button>
            </div>
        );
    }
}