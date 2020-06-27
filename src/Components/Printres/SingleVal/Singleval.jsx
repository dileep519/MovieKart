import React, { Component } from 'react';
import './Singleval.css';
let isButvis="";
class Singleval extends Component {
    state={
        val:""
    }
    onClicked=(event)=>{
        let z=localStorage.getItem("watchlist");
        let watched=localStorage.getItem("watched")
        watched=JSON.parse(watched);
        z=JSON.parse(z);
        let flag=0;
        for(let i=0;i<z.length;i++){
            if(z[i].id===this.state.val.id){
                flag=1;
                break;
            }
        }
        for(let i=0;i<watched.length;i++){
            if(watched[i].id===this.state.val.id){
                flag=1;
                break;
            }
        }
        if(flag===0){
            z.push(this.state.val);
            z=JSON.stringify(z);
            localStorage.setItem("watchlist",z);
        }
    }
    componentDidMount(){
        this.setState({val:this.props.data});
        // console.log(this.props);
    }
    UNSAFE_componentWillReceiveProps(nextprops){
        if(nextprops.data!==this.state.val){
            this.setState({val:nextprops.data});
            isButvis=nextprops.isButvis;
        }else{
            return null;
        }
    }
    onWatchclick=()=>{
        let z=localStorage.getItem("watched");
        let list=localStorage.getItem("watchlist");
        list=JSON.parse(list);
        z=JSON.parse(z);
        let flag=0;
        for(let i=0;i<z.length;i++){
            if(z[i].id===this.state.val.id){
                flag=1;
                break;
            }
        }
        for(let i=0;i<list.length;i++){
            if(list[i].id===this.state.val.id){
                flag=1;
                break;
            }
        }
        if(flag===0){
            z.push(this.state.val);
            z=JSON.stringify(z);
            localStorage.setItem("watched",z);
        }
    }
    singleprint=()=>{
        isButvis=this.props.isButvis;
        let popular=this.props.data.original_title || this.props.data.original_name || this.props.data.name;
        let src=this.props.data.poster_path? `https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`:"https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png";
        return  <div className="final-div">
            <img className="images" src={src} alt="unable to load"/>
            <h5 className="movie-title">Movie:{popular}</h5>
            {isButvis?<React.Fragment>
                <button className="add-to-list" onClick={this.onClicked}type="button">Add to list</button>
                <button className="watched" onClick={this.onWatchclick} type="button">Watched</button>
            </React.Fragment>:<React.Fragment></React.Fragment>}
        </div>
    }
    state = {  }
    render() { 
        return (
            <div>
                {this.singleprint()}
            </div>
        );
    }
}
 
export default Singleval;