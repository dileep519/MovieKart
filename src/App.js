import React, { Component } from 'react';
import Search from './Components/Search/Search';
import Watchlist from './Components/Watchlist/Watchlist';
import Watched from './Components/Watched/Watched';
import Printres from './Components/Printres/Printres';
import "./App.css";
const API_KEY=process.env.REACT_APP_API_KEY;
let value="titanic";
let isButvis="";
let isSearchvis=true;
export default class App extends Component{
    state={
        page:1,
        list:[],
        total:""
    }
    componentDidMount(){
        localStorage.setItem("watchlist","[]");
        localStorage.setItem("watched","[]");
    }
    onDatareceived=(event)=>{
        isSearchvis=true;
        isButvis=true;
        this.setState({page:event.page,list:event.list,total:event.total});
        
    }
    onWatchlist=(porps)=>{
        isSearchvis=false;
        isButvis=false;
        this.setState({list:porps,page:1,total:1});
    }
    onHomeclick=()=>{
        isButvis=true;
        isSearchvis=true;
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${value}&${this.state.page}=1&include_adult=false`).then(res=>res.json()).then(result=>{
            this.setState({list:result.results,total:result.total_pages,page:1});
            // this.setState({list:result.results,total:result.page});
            // this.props.onReceived(this.state);
        }).catch((err)=>{
            console.log(err);
        })
    }
    onWatchedlist=(porps)=>{
        isSearchvis=false;
        isButvis=false;
        this.setState({list:porps,page:1,total:1});
    }
    render(){
        let data=this.state.list;
        return(
            <div className="App-parent">
                <div className="App-child1">
                {/* <h3 className="logo">Movie srarch</h3> */}
                    <button onClick={this.onHomeclick} className="movie-but" type="button">Movie Search</button>
                    <Watchlist onWatch={this.onWatchlist} className="watchlist"/>
                    <Watched onWatched={this.onWatchedlist}/>
                </div>
                {isSearchvis?<React.Fragment>
                    <Search onReceived={this.onDatareceived}/>
                </React.Fragment>:<React.Fragment></React.Fragment>}
                
                <div className="print">
                    <Printres data={data} isButvis={isButvis}/>
                </div>
            </div>
        );
    }
}