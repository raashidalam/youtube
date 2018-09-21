import React,{Component} from 'react'
import { connect } from 'react-redux';
import {fetchcomment, postComment} from '../actions/YoutubeSearch';
import PostCommentToDatabase from './PostCommentTodatabase';
class GetComment extends Component {
  
    render() { 
        return (
         
            <div className="row">
            <div className="col-md-8">
        
             <button onClick={()=>this.props.fetchComment(this.props.id)}  className="btn btn-secondry">View Comment</button>
             <br/>
            
              {  
                  this.props.searchs.comment.map(user =>
                
                     user.snippet.videoId==this.props.id? (
                     <div key={user.id}><li> {user.snippet.topLevelComment.snippet.textDisplay}</li>
                     {/* < PostCommentToDatabase id={user.snippet.videoId}/> */}
              </div>):(<div></div>)
                   
                 
        
                         
               
                  )
                    
                 
                }
               
            
        </div>
        
      
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
 
     fetchComment:(videoid)=>{
        dispatch(fetchcomment(videoid));
   
     },
     SubmitComment:(id,comment)=>{
        dispatch(postComment(id,comment));
   
     }

};
};
export default connect
(mapStateToProps,mapDispatchToProps)
(GetComment)