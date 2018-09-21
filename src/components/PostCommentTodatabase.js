import React,{Component} from 'react'
import { connect } from 'react-redux';
import {postComment} from '../actions/YoutubeSearch';

class PostCommentToDatabase extends Component {
    constructor(props){
        super(props);
        this.state={
            commentPost:''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event) {
       this.setState({commentPost: event.target.value})
    }
    render() { 
        return ( 
            <div className="col-md-4">
            <input type="text" value={this.state.commentPost}
             name="name" placeholder="Enter Comment" 
             onChange={this.handleChange.bind(this)}/>
             <button className="btn btn-primary" onClick={()=>this.props.SubmitComment(this.props.id,this.state.commentPost)}>Submit</button>
            </div> 
         );
    }
}
 
const  mapStateToProps=(state)=>{
    return {

   searchs:state.searchs
   
    };
}
const  mapDispatchToProps=(dispatch)=>{
    return {
 

     SubmitComment:(id,comment)=>{
        dispatch(postComment(id,comment));
   
     }

};
};
export default connect
(mapStateToProps,mapDispatchToProps)
(PostCommentToDatabase)